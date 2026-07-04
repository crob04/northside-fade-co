from html.parser import HTMLParser
import re, os

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text_parts = []
        self.skip = False
        self.title = ""
        self.meta_desc = ""
        self.headings = []
        self.in_h = None
        self.in_title = False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "title": self.in_title = True
        if tag in ("script", "style", "noscript"): self.skip = True
        if tag in ("h1","h2","h3"):
            self.in_h = tag
            self.headings.append((tag, ""))
        if tag == "meta":
            if a.get("name","").lower() == "description":
                self.meta_desc = a.get("content","")
            if a.get("property","").lower() == "og:description" and not self.meta_desc:
                self.meta_desc = a.get("content","")
            if a.get("property","").lower() == "og:title" and not self.title.strip():
                self.title = a.get("content","")
    def handle_endtag(self, tag):
        if tag == "title": self.in_title = False
        if tag in ("script","style","noscript"): self.skip = False
        if tag in ("h1","h2","h3"): self.in_h = None
    def handle_data(self, data):
        if self.skip: return
        d = data.strip()
        if not d: return
        if self.in_title: self.title += " " + d
        elif self.in_h:
            self.headings[-1] = (self.in_h, self.headings[-1][1] + " " + d)
        else:
            self.text_parts.append(d)

for fn in sorted(os.listdir(".")):
    if not fn.endswith(".html"): continue
    with open(fn) as f: html = f.read()
    p = TextExtractor()
    try: p.feed(html)
    except Exception as e: print(fn, "ERR", e); continue
    body = " ".join(p.text_parts)
    body = re.sub(r"\s+", " ", body)
    print("="*70)
    print("FILE:", fn)
    print("META_DESC:", p.meta_desc[:300])
    print("TITLE:", p.title.strip()[:200])
    print("HEADINGS:", [h[1].strip() for h in p.headings[:30] if h[1].strip()])
    print("BODY (first 1500):", body[:1500])