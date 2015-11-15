<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
		<th>Birth Rate per 1000</th>
        <th>Cell phones per 100</th>
		<th>Children per Woman</th>
        <th>Electricity consumption per capita</th>
		<th>GDP per capita</th>
        <th>GDP per capita Growth</th>
		<th>Inflation annual</th>
        <th>Internet User per 100</th>
		<th>Life expectancy</th>
        <th>Military expenditure percent of GDP</th>
		<th>GPS lat</th>
        <th>GPS long</th>
      </tr>
      <xsl:for-each select="Countries/Country">
      <tr>
        <td><xsl:value-of select="id"/></td>
        <td><xsl:value-of select="name"/></td>
		<td><xsl:value-of select="birth"/></td>
		<td><xsl:value-of select="cell"/></td>
		<td><xsl:value-of select="children"/></td>
		<td><xsl:value-of select="electricity"/></td>
		<td><xsl:value-of select="gdp_per_capita"/></td>
		<td><xsl:value-of select="gdp_per_capita_growth"/></td>
		<td><xsl:value-of select="inflation"/></td>
		<td><xsl:value-of select="internet"/></td>
		<td><xsl:value-of select="life"/></td>
		<td><xsl:value-of select="military"/></td>
		<td><xsl:value-of select="gps_lat"/></td>
		<td><xsl:value-of select="gps_long"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>

