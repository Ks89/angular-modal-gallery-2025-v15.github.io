import{a as S}from"./chunk-OP2DKRUE.js";import{a as E,b as y,c as v,d as h}from"./chunk-RTANLSU4.js";import"./chunk-CFZEAALU.js";import{e as p,f as x,m as f}from"./chunk-WT7P4ZYM.js";import"./chunk-FXPWCWKA.js";import{a as g}from"./chunk-U4QZNBVL.js";import{a as b}from"./chunk-CHPSQRLD.js";import"./chunk-MX6BWF72.js";import{Ab as e,Bb as n,Kb as u,Oa as d,X as r,Yb as t,Za as c,yb as s,zb as i}from"./chunk-RXF25YXR.js";var a=class a{constructor(){this.uiService=r(g);this.titleService=r(b);this.modalGalleryService=r(f);this.images=[...S];this.configHtml=y;this.configTs=E;this.titleService.titleEvent.emit("Examples - Exturl button in a new tab"),this.codeHtml='  <button (click)="openModal(307, 0)">Click to open modal gallery id=1 at index=0</button>',this.codeTypescript=`  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number, buttonsConfig: ButtonsConfig): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        buttonsConfig: {
          visible: true,
          strategy: ButtonsStrategy.CUSTOM,
          buttons: [
            {
              className: 'ext-url-image',
              type: ButtonType.EXTURL,
              extUrlInNewTab: true
            }
          ]
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(m,l){let o=this.modalGalleryService.open({id:m,images:this.images,currentImage:this.images[l],libConfig:{buttonsConfig:{visible:!0,strategy:p.CUSTOM,buttons:[{className:"ext-url-image",type:x.EXTURL,extUrlInNewTab:!0}]}}})}metaData(){this.uiService.setMetaData({title:"Demo buttons exturl newtab"})}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=c({type:a,selectors:[["app-buttons-exturl-newtab-page"]],decls:121,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),t(3,"Exturl button in a new tab"),e()(),i(4,"p"),t(5,"Modal exturl button in a new tab."),e(),n(6,"br"),i(7,"h3"),t(8,"Live Demo"),e(),n(9,"br"),i(10,"button",3),u("click",function(){return o.openModal(307,0)}),t(11,"Click to open modal gallery id=1 at index=0"),e(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),t(16,"Code"),e(),n(17,"br"),i(18,"h4"),t(19,"Template"),e(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),t(23,"Typescript"),e(),n(24,"ks-codemirror",4),e(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),t(29,"Details"),e(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),t(35,"Input"),e(),i(36,"th"),t(37,"Value"),e()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),t(42,"id"),e()(),i(43,"td")(44,"div")(45,"i"),t(46,"Value: "),e(),i(47,"code"),t(48,"NUMERIC UNIQUE ID"),e()(),i(49,"div")(50,"b",6),t(51,"Unique id"),e()()()(),i(52,"tr")(53,"td")(54,"code"),t(55,"images"),e()(),i(56,"td")(57,"div")(58,"i"),t(59,"Value: "),e(),i(60,"code"),t(61,"Image[]"),e()(),i(62,"div")(63,"b",6),t(64,"Array of "),i(65,"code"),t(66,"Image"),e(),t(67," objects"),e()()()(),i(68,"tr")(69,"td")(70,"code"),t(71,"currentImage"),e()(),i(72,"td")(73,"div")(74,"i"),t(75,"Value: "),e(),i(76,"code"),t(77,"Image"),e()(),i(78,"div")(79,"b",6)(80,"code"),t(81,"Image"),e(),t(82," object to show"),e()()()(),i(83,"tr")(84,"td")(85,"code"),t(86,"libConfig"),e()(),i(87,"td")(88,"div")(89,"i"),t(90,"Value: "),e(),i(91,"code"),t(92,"ModalLibConfig"),e()(),i(93,"div")(94,"b",6)(95,"code"),t(96,"ModalLibConfig"),e(),t(97," object to config the library. See below."),e()()()()()()(),i(98,"section")(99,"h4"),t(100,"ModalLibConfig"),e(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),t(106,"Input"),e(),i(107,"th"),t(108,"Value"),e()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),t(113,"buttonsConfig"),e()(),i(114,"td")(115,"div")(116,"i"),t(117,"Value: "),e(),t(118,"see the ButtonsConfig object above"),e(),i(119,"div"),t(120,"It will show only the exturl button as a custom button to navigate to an external url in a new tab"),e()()()()()()()),l&2&&(d(20),s("content",o.codeHtml)("language","html"),d(4),s("content",o.codeTypescript)("language","typescript"))},dependencies:[h,v],encapsulation:2});var C=a;export{C as ButtonsExturlNewtabComponent};
