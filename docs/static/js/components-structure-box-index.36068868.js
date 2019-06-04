(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/core/Button/index.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/classnames/index.js"),r=n.n(a),i=n("./node_modules/react/index.js"),s=n("./src/lib/withForwardedRef.tsx"),A=n("./src/components/core/Button/styles.scss");"undefined"!==typeof ButtonSize&&ButtonSize&&ButtonSize===Object(ButtonSize)&&Object.isExtensible(ButtonSize)&&Object.defineProperty(ButtonSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSize",filename:"src/components/core/Button/index.tsx"}}),"undefined"!==typeof ButtonVariant&&ButtonVariant&&ButtonVariant===Object(ButtonVariant)&&Object.isExtensible(ButtonVariant)&&Object.defineProperty(ButtonVariant,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonVariant",filename:"src/components/core/Button/index.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/core/Button/index.tsx"}});var c=Object(s.a)(function(e){var t=e.children,n=e.className,a=e.forwardedRef,s=e.href,c=e.icon,l=e.onClick,g=e.size,m=void 0===g?"regular":g,u=e.type,B=void 0===u?"button":u,d=e.variant,p=void 0===d?"primary":d,b=Object(o.a)(e,["children","className","forwardedRef","href","icon","onClick","size","type","variant"]),y=r()([A.component,"primary"===p&&A.primary,"secondary"===p&&A.secondary,"alternate"===p&&A.alternate,"gray"===p&&A.gray,"secondary-gray"===p&&A.secondaryGray,"large"===m&&A.large,"regular"===m&&A.regular,"small"===m&&A.small,"xsmall"===m&&A.xsmall,"inline"===m&&A.inline,c&&A.icon,c&&!t&&A.iconOnly,n]);return s?i.createElement("a",{className:y,href:s,onClick:l,ref:a},c," ",t):i.createElement("button",Object.assign({className:y,onClick:l,ref:a,type:B},b),c," ",t)});"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/core/Button/index.tsx"}})},"./src/components/core/Button/styles.scss":function(e,t,n){e.exports={component:"styles_component__2awxW",primary:"styles_primary__1L4iI",secondary:"styles_secondary__3tK8e",alternate:"styles_alternate__2M2F-",gray:"styles_gray__3HKrl",secondaryGray:"styles_secondaryGray__18rpX",large:"styles_large__mGxaJ",text:"styles_text__f6Ehd",iconOnly:"styles_iconOnly__12WLk",regular:"styles_regular__2IIK5",small:"styles_small__2v0-u",xsmall:"styles_xsmall__2OW19",inline:"styles_inline__3MFrZ",icon:"styles_icon__3unX9"}},"./src/components/structure/Box/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r=n("./node_modules/docz/dist/index.esm.js"),i=n("./src/components/structure/Box/index.tsx"),s=n("./src/components/core/Button/index.tsx"),A={},c="wrapper";function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(c,Object.assign({},A,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"box"},"Box"),Object(a.b)("p",null,"Use Box to quickly scaffold flexbox layouts."),Object(a.b)(r.c,{__position:0,__code:'<Box row align="space-between" margin={{ bottom: 2 }}>\n  <Button>align</Button>\n  <Button variant="secondary">space-between</Button>\n  <Button variant="secondary-gray">of</Button>\n  <Button variant="gray">content</Button>\n</Box>\n<Box row align="right" valign="bottom" margin={{ top: 4 }}>\n  <Button>align</Button>\n  <Button variant="secondary" size="small">\n    right\n  </Button>\n  <Button variant="secondary-gray" size="small">\n    with\n  </Button>\n  <Button variant="gray" size="small">\n    margin\n  </Button>\n  <Button variant="alternate" size="small">{`{{ top: 4 }}`}</Button>\n</Box>\n<Box row align="left" valign="top" padding={4}>\n  <Button>align</Button>\n  <Button variant="secondary" size="small">\n    left\n  </Button>\n  <Button variant="secondary-gray" size="small">\n    with\n  </Button>\n  <Button variant="gray" size="small">\n    padding\n  </Button>\n  <Button variant="alternate" size="small">\n    4\n  </Button>\n</Box>',__scope:{props:this?this.props:n,Props:r.d,Playground:r.c,Box:i.a,Button:s.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABQHOAlmgqBXESFIhFCDB2HkV1jXaA8AC8_X5O1IPYa9vEw7DZXaD04AEcgAXTfQ4EkFE0UlPoYEkMisEIiD2Cg69wgicwsKNKiaLohj1xoZiqC6LihOoXjiPYQNJUok1NXaMFUF0FFjlOPDnAIRIsXYbh-PWKIBGeVArnaAAGdgkxmHi92rGYOxYGd7IAFlc9gADZXPadyLDAYCADFvWgRJ7P4ZxDgRB1MBgoR-CWIhqEoOBPIRUL1gimhnAgPDLnYABGXz3PkHS9KmABBOZzPYCMoPIGwoHQMNMI5cyxFa6MZHYFFTJgbhgHw4yxrgeQtxrYAOugbrggAMlW8ZEnmShmiWrqeu4Q65TAdDJQGVB2nYAB-DZlrDCM-quPaVtQWrqykGQqzfMwYXVY4YDAMIoCmB7-sG96muXasEzUggcEizIUivAh5prWtuInUYQigCAUlQPgQFyiUYHNQICBGIJ_RAdhrNsiaoK8G5IiuAAmTC5pXNHGEEpnUDEeJcdQKQeeE1G0fRxTzFYVx-ncAgCbgLZqHQGXEnEImEVJ0cKboYXJbFrmReZaXZZoBWlYwVXzVQ5DxB2vXeYNmtucl9gTYgOWCZttWQDEXQQIIB3Rc52suO8J3ufIoQxgFvGCf6FJCH4N3Y_x_hGYiIhk9ptB6aHGYrl89mnYTI2-dToPqBLiXeZT035f4RXdBVgQfZG0rxsbqIEnEEO0YTpPofFyu-b7mvhLrj2zcbi2W8Sa3Mjb_IyoV7uoF7ofxbzXEx5H6uXdr93Pf4b3k-XzvCbXjet7RnP_U352FMd3ey8n4-QHiWgBFQLIz471f4jr19sAYowAoIRALuwIu8h5DFHkHvEOwtw6IIxtHbGgsCawDAKIam0scZx34BA5OnlOwFAmr5DmD9S76wrk_YOVDx7GxllPBuhNZ6qz_ivLugDr43wsFg0QDCEFCNfkfaebDm5W1PtTc-ACe6-zHhYfMeBd50Kri_V2YjWHSPblwy-PCFEMIsCQ7yhQhFqNHiIzRzD36fwyD_WgnCL5wCvoYvhFhfKqLLhHMOWAxZSFhvDRGyN5pSEhl9MwX5CaSU-NJAgzFWKhHYvJbikhVDYBwPErAgF_b6AYERP65AkJwDgAAOW9PADS7Qin-DgD_I8cBlJ_SglEGYABpGAiQ7CiTdO0KATh_B4CafaIwIQ7CwyqaaRUKp74FJGWMkaJkzJiXdCxJZ8AcBwDOI0mZP0sAqRMvMUi3gGr4PMHwasAAfOUEDtJXLlAiPQAg7kWGue0DOkQXnsDeQIr5byB4vnWG81AQpu5_LlBrEmZMdYXSBRCvKJMYCsDoEkP0eyVJoC_oDZKpSYApGiGwGAzgEWWWrBAq6VxUChCIIEI41yvCUHJKgGZFgPlEApewKlNKMjfPYAyplLL2ACI5Vy2lvL-XimZesAFIrqVivpcIAVZg3ror-pijI2LujcVgpQQcwB1ipw5dxU5gtBUeAlNsVCbQMActYgUQVz0wwcsCbDUpgIHXFLKRU21qJ7XrCoFAalqAOUSvcIKu-sruV0r5YqyVvLcX4piMi4lxNw2uCwAACRgLjQgkb5WLOnCkNNWAADqXAJh5p5dcu1M5BVCinJWgQgqTEFEbeK2N7h414oJcmhFgquhISTTAENHapXVmjiOxlkrBW0CwAQE1eMOV9IBi-Xl1T9AZEuv8nNL5BV4MFkak5ZzBUjEyDMSdSrXo6W4jgTAgNQjAx1YOCy-rqwBqDVcVEDIwo0xlrZK4Dkf0tp8uwQD0rRhXEBlARWP7T2zEg_EGDyrdmoBOrpbs5huJtQNWcn95qdhWvQosf1nUXo_pqSU8pR5yOMqDT-u-9H01Zp3Yx0t5a8A_vrRkIDXkCg_oHT2mA_HRg_tnfO3D6x9141g2emqVxtVwT6q-iwjwabhFCIA5I2Ail5EJVcVCXA3Z2DALALA76iBSzgPUEz2Bo7-uoPpWwABxfo6ALwwGRi1AAhGg9a7AvPmbHRYeqnA4BOfSP0cgkVTOOEDRZ7zznXPuc835wL7A_M-dGA6hzY4wsRdiNF7AIosYWS84lrgyWXR-ejihlTkg-wy0VlAy0EAuhnWZH4OAmxjNCga6Qmckg77rFgFMZ0ibCUpoRPYT18ArhaliBh1WjBRVVpjVO9wA0X3yEFWNwTk2YDTdqZUiyYQkb6ATXthFh2SnwCjEPXbQ79vXcVvBFcDGVztDvgVasH51gPYm1dmbdgTvomRhdx7gOjtwDu2jf7vbibPfgD-4xvGZzI7lMBlI32LC_fvnVzgqAcbOkWTNQ0vWuMCCWKOcgOB7OoEc4TtARL1n3HYPN9rP9W6MBrbOa5K2BCbf4ttnSFgIDNAjBTpTK40BE-ZzNHAFOWoU8FSq6sYvWpRDY-gCYUuh4y6Z9NLEOBNdlu13iCyJv2Mq5F5wcXmvmOJwILrtG-vnSG42fb7NjuWqe53dbvHtvWr4ctWhDAzuayu7l0b4PhGMIWRj6H9A_u6f6Qoy9lqaeqO3ZXKNI3sTqD6HR5nip6PnP5aizF2j8W_O542TZrAsW6PS7y86SLhWsDFbGDXlnOB6-d_RwJod6WNq16s4Pwl6OxMLvMN3maABtYoAB9Rffh-mL6n2cxfAASYAG_BawIALro7gzMYfJOjcn9Ly3jIBXK9xZnxtVOZ-l8r_iJQRfgXF-p238AVOsCr_hat637YCN7V4bRSYP7sAv6r7v6f4QE_5_7FAAHl7t6d5n5P5-bQFv6L7Rxf6b476IHIFAEV5FZYx-YQHP7L4wE4GjCL7wEEFnL_4rhw5EqQ43avY_a1YTijh9DmAw7OzDTF5HgTRp7wBYS14TSR7u6zROyLSkZhhvRcw7iyDrC46q5oYc4hCg7nbdoQ4I5A78GiGs7s6LZc787trrZ8w_qQpXDg4A7Ey8rmEKqWH0ajiRb2SY5bpyhfbuTh7q4RiHIwA7QjQkqHQWTtCUAeDqBbAvjh4WBdAEC8Gkpbw4CpFGHo4WCpHG6zAdJdIRiQpLARh4LfrsDbCdJ9TcADRYFr475Hi-rkDyA_5lGJCNE77FEwCwIcjo7C7VhYTzhNb-ErgBFbRBHNCQrmRHTtD85brXKBHBHjFhFyihoXR9TrQ54IqqHJE1gJFJHKbixZHpEhxZF7FbwL5UHYG1FuGxCNEQI_6lJyqRiQociH6fpohCZjxnGv41HAB1GRaNFsp3EPECD5EIrPHFAH6vHfofHVHv6XH1GNECKAlRognExgkQnjBvEZE1ifHUFwl_E4E7pIm0ookIhomQnvEPxKArg9EWCq7xE8Hfw9BA4zKq6_T2gCTkQ9FRK0T0T54ZjxIAgpKSxpLhi4BZI5LAR5JgRzJTBCGVIrLVKer1LwDDJTCjL-CqSaiTJaQoYylbGRRCgjAyyYDoBihgBPocFKK4gGkCBGkCAmlmk1RVKpGSAukuk4weCSDKI2l2kOkAxoqoB6nqmEgs7OlrLy5bIlIBlslTCBGkSSwlRlQtR9J_owBeHygpAPoyzpkuKALplYC5kJDpmR5-gxmbRHJlwABqNimYFyryGO_Q1kiQ4K7QTcysqsLZ3sLZbZlsrcC8yELZdi38WQ0Z-yaqTymq8ZvMFpWx58RqCZHce6NZBA85vM1Z9cgqxg6pcwSQnKgmxwtgrgHgsAOQ_YuqGQJk7API6wLAFQx52QF606JGd0dAzqmoOArq7q_qnqWePqhagqsQ1Ab5ZoH5mobqmAm5JgfYQgrAXA3QeAIxAgROuwHgyISyBQtYrgA07gHUvWyFQqEAZRIQfKrs151YeAXQYAf5fqZKIxS69IHgRALw6ZHgks6ZRS4ozya6XQisu6TIqA02sQ2wHKZ4yKNAkUp0GGlgLJOkGhGGU5wkIorgIw2Gb68hdA5GP5JehUhpxp2Qjp6wFFAMP6gFqAnGAlOMOw1hHcyZXQmZSEzyomIxyZrFvM2Ob8tZDZ_IHZP6WRIgmwAgyq8mksM5q06wPpelppAMoV6wgSFpZaEw-wZpjAAAUs4AABo4ANA0DTj5DkCVYyRz7vJsUH5iDh4hauXCTPZZ7A5Mm1I1URhz454958mF4rhaITHhH9jeWtyXSz5G7dVNno4dWLGtnsK9Vn6j6bLjWJDDXLmdVyhDkOJpmTU95LVZBzX1wLXtBdmrXy7eybUsLbU9lzz9nNl7VG4nWqwubITo7nzbUOVpB9Uj496PUUloz3WjV2VZlcX9UbLfUOV3U2WjWFlQDPXn4bKg1A1JmjUFlrzg1TVw2ALQ3dCjUlkXUbKR6l66AY1WamXY3MgZaOprQvXy6mU6iE6zUrhyk_oH647rD-FGVgBxHcGJGMn8FcyuBjxykTSVXUDVUVKzRjxM0TRM2KE3z82WXbATSS1CXi1byUUTQRS2mRVmny01jVzACmVYRyEvlXoPxSBYUri460k247Hs0riMB80B5ow83ADW0C0NLq0WCy07Ay0WVy0hyK3ADK2-n6UAzO3lnjS74jGB3AB-UTAZDq2yHa38TE361KHW3zRqF1Q5YKXMgWTem6X2n-1gAHzCQWkNhlxKUjD03Ohjnsnp0iQzLckxKOgF4yRrJsRs2cSpJTWRlaAUCSmgQgAAACep7QMBAZW-LAbWGGrOARuqMaTMsoAiE4O6uOW-1Q5oqcyME96wECPQG6RwbKQqK6893uIKAg3cIRxMWs5MlMp9msSKKKas74MyW-YmK9Zya9VwEYc9jyX8B9hAi9Bm6A5oCICQAD1qBArMvkKGHw9d_JWx_dukgaqUXgOdAgpM3gSo7AqmlgOouoVwmA_YWwv8Aeq0OAJ-Wx4Upm5oJ-VwJ-ye1YRD4-yKpDfYOULw50Vw9DMANDFgRD9eoB5gJx7AsDOmqU9ewD9-EYW-qckG5DKIMsTunD6WvepmaB_Dgj8D3QIjNW6wb0quW5RQoymD2DqQ_S5qUAI084MRQohIwwD66AF0UwgQnKWw8AFQrctORikAmZXQew4QeYkw-I8F84pjtgeYQgM428BY2yWU6AD68A3IZFZgvdCoeIEjL9LoaA7AS93gz9gsa9WxqmgW6wiAmIkR8QEYOA5xa-n-3-AAxMACkzk_oPICzanOaC8B5qzq0tbKOOI8vfXksPU3jMjCbZhDbkU8Y6U-U18bAVXqgHQTU3U6vY0yzeoHkDEGAPPLkjQFcJ06eD01k30xk4szQMM3Seg_VnZtWGMyU1AGUxU-_rgfMwM6gMjE04wysyiGLhs93aA7-jMF0wQHs1gOaAc080M_I1cyY7c1MzQSMHM5vrU6C0s4wy0200QB07MP84C8C6Zv00c3I1o8qjpL3crRkxABpBVPiGhInJVE5HsYkxKMkzkOkyPa1jEedHYPwxCxM3c4vpjovgi-gI0QixAK8_wyjv1ikOaAK_IJ-h5oKOIxAMM6bTbewFyzc5M9QXfPy3U4K9q1viKyzRYHfFKzqzK-MHK5QAq0qyM70YS_fPSx1Bk2OOYI_dgBaHixy4U8U5Cxq9gXvnjHqwQKKyuE_ZI06_7m9LXfRB6V6dadnX6WAJknANktoJswYGBLo-YPo1gzqFcBmpQPYK2XyqaLsGeafr7caRhRGOiHgH1JUP9Peo-nBHozfNYME8E1SvEvUHqDugshTAkHmK4OOOhDEKY5HYWEQEQOhC8MkHEAQB1JUqEKfsoi21vK4EyXGnALRhhvUKcqY70AIGGFMFu4GuPSEF4w0nAMkK4Im3oy22aRcLpLNi2-aNcLcPcI8FMgQJoArjZNIKcMxDYInBkOaBTsA4xDJPgMQFANUzIzEOQOaHUcMOgHAIh6s1rMAzMBANkKB8ioFVm-wK-4QO-w8E8KyO8J8JIFqADGgG00kJYCMegFRzR4GbQPR4x2kiUgyMxEmA5AAOwACcFUL7b7dwpHzwrwFHkQLEIw5oiQWAkgX75ogRWy_QMwFoC70QXWQQBAnH9I8AkgAAHIFCJ2eFgN6GSN0BGK5QZPAHY3mEKLsMokKlkPpJYM4ByIgKuzWMR2J48EeCwNSpA18L3dZDELM8MGx1AIp5qOaJRah8ospyMapxAOpyvUmCzOgAAKyBTkC-ToBJgVRZfecWC-cftkeSfBeSD5tReSDHmUApCCgojMT1eelRAogZCSAswOQVSGfmgOSGcxdmjKeofxcsSSSzAzCSAOSBTAvxsFBxcAyodoDmjDA05ZJ6O8izJ8TBmalmjalmijkYoTkOERU51RXmlwRbEVvndmnAWSigV51IhiAyX3xyXnThN4BncJuMA6gJxoDxAzlut0AodC4NjrAlpnrzDoBrgN0_OBKw_8kMfzC_f_c_xQCF2-HXeSUfc3cXcRhlus5_e4wA8Y9wRLCUVXAuoAyo8k_o-F0s3m3mCMCQ-TfZCI8ujh2pGE-iTxu50TSUVYSbjyMhbKktSs9zDs9QPHi3lkjIRZ7fLXIS_Q8c80A4DKmCp49mm3q2By-JAK8WTFBZ0q23cAziPADKlNPFBcFM97cPda9m8O_M2veqqV3G9-0XeYQ11KDRK8nS-N1ySt3Cnt3bISl6A93918SD1v4BnBdxIwNoBCPdCINTgoNYBoMYM5s4MwB4NzuMjViqOhAINgeJ7ZBmoU5XAVQBQnuGaojuBExHszpuuWhKyZAYaUoF51p4cmYQa-BcCYBjrrAbQADU6WjDxrAiAGOAWXHm8jq0iAwweHjDB7W7ZYTD6qTa1NjKQoT0fQR7sWQogqFgT9mAckBK1AHfzoc_iAEUvQnrQ8qmZ55qx5yI1jXUnKIg4wSREwwTO0zQ0T3QCICEHIAIgSkEADwNABnZuM0Y-wWXABjn5z5byR5E8gfkYa6oJQM7KfllyP7r8nk5oG-jJEv4cNqafQVftn0bYEB5GqmA_gIDgA24iGg1VWIwwTzWp_6AaHfhk2PIMgcBKfEDuwLX5L1A0xAoePwKoY2BaAXBLhgv0oB4d0c8_b1ty2VoIh82eHQ1jGiQaiMOBgghkOaEtAyxtgOA1lBaljxsDt-AgrgSTD0ECADB1JG3FILNAT4Vw8g8Zuq0XxKCYADUM6MijUG8DkGogzgUIN0H4JCAhgvlMYMTyaDzBgQ80FgGCGUDbBtrQhtNUkStxmB4Q1gZENeL19PIjfFcL4MyEBDuBW_fpFEKKEqt5-i_bjE4LVa3N3BKgjIGoP8HaDLBLcGwQ_HyFNCLBug1oTgNOb2CvB71GsM4Oua1ChQCITwUOkaFmCrgzQoIX7hDgdDphhQywXENCEsCiMBQrfN7F0FYBdhqwkOOgPICYDQMOAATr0IJZJD1qtAZfksK2GLw5-J4ReGkIIwRCmh2wmIXsPmEiDbh7w_YeUOkFL8xWYQl4RkP8FxC6A4jd4bsNiEsYaWAAUmtZ9D0siABwQwyBHrCMAmwqETCMdznDEhQ_ZIe2Vbg3Vkg_DDEaYJKFZD6cOQ_QDwLA5vD7hxQrQe8J6F2DkRlQo4OiPpE_DF4cw3ESHAZHIQ8R1Q1Ed0HRHpCNhgo-eB8JxEhCEhyrdYKpkTKxMkhb1RhkVAtDnxWYDkVyDgMxyys1QEYCqH1FoCGiKoOAFmFlzLpox5-xSC0DtCS5HIgRmOc0JPygQ6j0-IcF0QCkLgejhRQ8IhmJkYbitTEroldAaPlbGjQh3ondBGMtZRiEhTgnAOTUprBi-spiOMUaItFWi8RCo2hqGDxQ_V1RwEc0FqMqjBRPRQ8fUea0NEOQcAfHK0TWMjHWihhiAO0aBzACOixRXo1HJKzdGmj5WLMaftaxDELcfRTYy1kOJzGJiAxmSN1mmJdH9iLWRokcemLHGxiJxK4_0TaOTG6AKau5Z0b2MzEJih44tU5kQ1BrFiaApYjuJX38iVi0Y1YgcZazrGNjnxW4tkbaP8D2jOxcZQ8RKzDHYJjxq4mMY7mAnbihhc4udAuN7GASfm7418SBNgnjiEJw4iCVw13HUB9xpInsRK0zGITcxNrAkUjQHb8MNRN4sqJXxZi6iVwT45cXWMtEmj6JaEz8VBMgi4TQxS42sSxIfigTCA-EniWjCRFEMUxB4jiQUAEnTjTxFwgkZHkYay8kIcUAnLLlJj9IdgOA8iWWLQABUXgeoo8ZuIYlvjmJUkvMRhNMqMNQ2ZyJ6NvQjaRIfeeUbYK4DSD_gt2qAMPgHAYB7F-AypfgFcH4A_Biw1QEDj-Es4ZR1g_APDvkGoC-T2A_AOsfFLCnVh-A5QcgGpwwwxT-ADUduL-GhDmccpuDfpIkFzC6YwmSnAKX8FLCJSLA_AKIGgAykqBRSLkqqbFJAC4MQe8IbDnQKQCMNkphkeqQAD1zRQ4hyM1OqmCBNQA0iqIFBwCGccAJnEAOjn8lKlBaA0ocUOPmmLSQA_SFWF1gGm-QcAFUPjgdOE4LSVw_AJTlaEmnTTZp80i4fIG5IVTcAugDxi5OoDuSpSIAfVCAAHGDpGQSAfyaaFoCLdhuk3fgPdJgTyAgAA",mdxType:"Playground"},Object(a.b)(i.a,{row:!0,align:"space-between",margin:{bottom:2},mdxType:"Box"},Object(a.b)(s.a,{mdxType:"Button"},"align"),Object(a.b)(s.a,{variant:"secondary",mdxType:"Button"},"space-between"),Object(a.b)(s.a,{variant:"secondary-gray",mdxType:"Button"},"of"),Object(a.b)(s.a,{variant:"gray",mdxType:"Button"},"content")),Object(a.b)(i.a,{row:!0,align:"right",valign:"bottom",margin:{top:4},mdxType:"Box"},Object(a.b)(s.a,{mdxType:"Button"},"align"),Object(a.b)(s.a,{variant:"secondary",size:"small",mdxType:"Button"},"right"),Object(a.b)(s.a,{variant:"secondary-gray",size:"small",mdxType:"Button"},"with"),Object(a.b)(s.a,{variant:"gray",size:"small",mdxType:"Button"},"margin"),Object(a.b)(s.a,{variant:"alternate",size:"small",mdxType:"Button"},"{{ top: 4 }}")),Object(a.b)(i.a,{row:!0,align:"left",valign:"top",padding:4,mdxType:"Box"},Object(a.b)(s.a,{mdxType:"Button"},"align"),Object(a.b)(s.a,{variant:"secondary",size:"small",mdxType:"Button"},"left"),Object(a.b)(s.a,{variant:"secondary-gray",size:"small",mdxType:"Button"},"with"),Object(a.b)(s.a,{variant:"gray",size:"small",mdxType:"Button"},"padding"),Object(a.b)(s.a,{variant:"alternate",size:"small",mdxType:"Button"},"4"))),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)(r.d,{of:i.a,mdxType:"Props"}))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/structure/Box/index.mdx"}}),l.isMDXComponent=!0},"./src/components/structure/Box/index.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/classnames/index.js"),i=n.n(r),s=n("./node_modules/lodash/lodash.js"),A=n("./node_modules/react/index.js"),c=n("./src/components/structure/Box/styles.scss");function l(e){var t=e.align,n=e.background,o=e.children,a=e.className,r=e.column,s=e.margin,l=e.maxHeight,m=e.maxWidth,u=e.order,B=e.padding,d=e.relative,p=e.row,b=e.textAlign,y=e.valign,x=e.wrap,_=!p&&!r,w=!_&&r&&!p,O=!_&&p,j={};j=g(j,s,"margin"),j=g(j,B,"padding");var f={};u&&(f.order=u),m&&(f.maxWidth=m),l&&(f.maxHeight=l),n&&(f.background=n);var Q=i()(c.component,a,w&&c.flexColumn,O&&c.flexRow,d&&c.relative,b&&c["__halo_textAlign_".concat(b)],x&&c.wrap,w&&t&&"__halo_column_align_".concat(t),w&&y&&"__halo_column_valign_".concat(t),O&&t&&"__halo_row_align_".concat(t),O&&y&&"__halo_row_valign_".concat(t),j);return A.createElement("div",{className:Q,style:f},o)}function g(e,t,n){return"object"===typeof t?Object(a.a)({},e,Object(s.mapKeys)(t,function(e,t){return"__halo_".concat(n,"_").concat(t,"_").concat(e)})):"number"!==typeof t&&"boolean"!==typeof t||!t?e:Object(a.a)({},e,(r={},Object(o.a)(r,"__halo_".concat(n,"_top_").concat(Number(t)),!0),Object(o.a)(r,"__halo_".concat(n,"_bottom_").concat(Number(t)),!0),Object(o.a)(r,"__halo_".concat(n,"_left_").concat(Number(t)),!0),Object(o.a)(r,"__halo_".concat(n,"_right_").concat(Number(t)),!0),r));var r}"undefined"!==typeof BoxAlign&&BoxAlign&&BoxAlign===Object(BoxAlign)&&Object.isExtensible(BoxAlign)&&Object.defineProperty(BoxAlign,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxAlign",filename:"src/components/structure/Box/index.tsx"}}),"undefined"!==typeof NegativeSpace&&NegativeSpace&&NegativeSpace===Object(NegativeSpace)&&Object.isExtensible(NegativeSpace)&&Object.defineProperty(NegativeSpace,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NegativeSpace",filename:"src/components/structure/Box/index.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/structure/Box/index.tsx"}}),l.defaultProps={column:!0,margin:0,padding:0,row:!1,wrap:!1},l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/structure/Box/index.tsx"}})},"./src/components/structure/Box/styles.scss":function(e,t,n){e.exports={component:"styles_component___-uaO",wrap:"styles_wrap__13RnB",relative:"styles_relative__15uhI",flexColumn:"styles_flexColumn__2PoCj",flexRow:"styles_flexRow__TtEY4"}},"./src/lib/withForwardedRef.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("./node_modules/react/index.js");function a(e){function t(t,n){return o.createElement(e,Object.assign({},t,{forwardedRef:n}))}var n=e.displayName||e.name;return t.displayName="withForwardedRef(".concat(n,")"),o.forwardRef(t)}"undefined"!==typeof ForwardedRefProps&&ForwardedRefProps&&ForwardedRefProps===Object(ForwardedRefProps)&&Object.isExtensible(ForwardedRefProps)&&Object.defineProperty(ForwardedRefProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ForwardedRefProps",filename:"src/lib/withForwardedRef.tsx"}}),a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"withForwardedRef",filename:"src/lib/withForwardedRef.tsx"}})}}]);
//# sourceMappingURL=components-structure-box-index.6b0b57a07e8285f4b10e.js.map