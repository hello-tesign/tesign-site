<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" encoding="UTF-8" indent="no"/>
<xsl:template match="/">
<html lang="ko">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="robots" content="noindex"/>
<title>sitemap.xml — tesign.com</title>
<style>
:root{--bg:#F4F2EC;--panel:#FFFFFF;--line:#D8D5CC;--fg:#15171C;--muted:#5C616B;--accent:#2A5BD7}
@media(prefers-color-scheme:dark){:root{--bg:#0F1115;--panel:#171A21;--line:#262A33;--fg:#E8E8E8;--muted:#8A8F98;--accent:#7AA2FF}}
*{box-sizing:border-box}
body{margin:0;padding:2rem 1.25rem;background:var(--bg);color:var(--fg);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Apple SD Gothic Neo','Malgun Gothic',sans-serif}
h1{font-size:1.1rem;margin:0 0 .25rem}
p.meta{color:var(--muted);margin:0 0 1.5rem;font-size:.85rem}
p.meta a{color:var(--accent)}
table{width:100%;max-width:1100px;border-collapse:collapse;font-size:.82rem}
th,td{text-align:left;padding:.5rem .75rem;border-bottom:1px solid var(--line);vertical-align:top}
th{color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.04em;font-size:.72rem}
td.loc a{color:var(--fg);word-break:break-all}
td.loc a:hover{color:var(--accent)}
td.num{white-space:nowrap;font-variant-numeric:tabular-nums}
</style>
</head>
<body>
<h1>tesign.com — sitemap.xml</h1>
<p class="meta"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>개 주소 · 검색엔진이 읽는 원본 파일이며, 사람이 보기 편하도록 이 화면으로 자동 변환했습니다 · <a href="/">tesign.com으로</a></p>
<table>
<tr><th>주소</th><th>마지막 수정</th><th>갱신 주기</th><th>우선순위</th></tr>
<xsl:for-each select="sitemap:urlset/sitemap:url">
<tr>
<td class="loc"><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
<td class="num"><xsl:value-of select="sitemap:lastmod"/></td>
<td><xsl:value-of select="sitemap:changefreq"/></td>
<td class="num"><xsl:value-of select="sitemap:priority"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
