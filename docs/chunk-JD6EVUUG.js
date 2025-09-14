import{a as p}from"./chunk-OP2DKRUE.js";import{a as C,b as u,c as T,d as M}from"./chunk-RTANLSU4.js";import"./chunk-CFZEAALU.js";import{m as b}from"./chunk-WT7P4ZYM.js";import"./chunk-FXPWCWKA.js";import{a as v}from"./chunk-U4QZNBVL.js";import{a as S}from"./chunk-CHPSQRLD.js";import"./chunk-MX6BWF72.js";import{Ab as i,Bb as a,Kb as g,Oa as s,X as o,Yb as e,Za as d,yb as c,zb as t}from"./chunk-RXF25YXR.js";var r=class r{constructor(){this.uiService=o(v);this.titleService=o(S);this.modalGalleryService=o(b);this.images=[...p];this.configHtml=u;this.configTs=C;this.accessibilityConfig={backgroundAriaLabel:"CUSTOM Modal gallery full screen background",backgroundTitle:"CUSTOM background title",plainGalleryContentAriaLabel:"CUSTOM Plain gallery content",plainGalleryContentTitle:"CUSTOM plain gallery content title",modalGalleryContentAriaLabel:"CUSTOM Modal gallery content",modalGalleryContentTitle:"CUSTOM modal gallery content title",loadingSpinnerAriaLabel:"CUSTOM The current image is loading. Please be patient.",loadingSpinnerTitle:"CUSTOM The current image is loading. Please be patient.",mainContainerAriaLabel:"CUSTOM Current image and navigation",mainContainerTitle:"CUSTOM main container title",mainPrevImageAriaLabel:"CUSTOM Previous image",mainPrevImageTitle:"CUSTOM Previous image",mainNextImageAriaLabel:"CUSTOM Next image",mainNextImageTitle:"CUSTOM Next image",dotsContainerAriaLabel:"CUSTOM Image navigation dots",dotsContainerTitle:"CUSTOM dots container title",dotAriaLabel:"CUSTOM Navigate to image number",previewsContainerAriaLabel:"CUSTOM Image previews",previewsContainerTitle:"CUSTOM previews title",previewScrollPrevAriaLabel:"CUSTOM Scroll previous previews",previewScrollPrevTitle:"CUSTOM Scroll previous previews",previewScrollNextAriaLabel:"CUSTOM Scroll next previews",previewScrollNextTitle:"CUSTOM Scroll next previews",carouselContainerAriaLabel:"Current image and navigation",carouselContainerTitle:"",carouselPrevImageAriaLabel:"Previous image",carouselPrevImageTitle:"Previous image",carouselNextImageAriaLabel:"Next image",carouselNextImageTitle:"Next image",carouselPreviewsContainerAriaLabel:"Image previews",carouselPreviewsContainerTitle:"",carouselPreviewScrollPrevAriaLabel:"Scroll previous previews",carouselPreviewScrollPrevTitle:"Scroll previous previews",carouselPreviewScrollNextAriaLabel:"Scroll next previews",carouselPreviewScrollNextTitle:"Scroll next previews"};this.titleService.titleEvent.emit("Examples - Custom accessibility"),this.codeHtml='<button (click)="openModal(300, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  accessibilityConfig: AccessibilityConfig = {
    backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
    backgroundTitle: 'CUSTOM background title',

    plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
    plainGalleryContentTitle: 'CUSTOM plain gallery content title',

    modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
    modalGalleryContentTitle: 'CUSTOM modal gallery content title',

    loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',

    mainContainerAriaLabel: 'CUSTOM Current image and navigation',
    mainContainerTitle: 'CUSTOM main container title',
    mainPrevImageAriaLabel: 'CUSTOM Previous image',
    mainPrevImageTitle: 'CUSTOM Previous image',
    mainNextImageAriaLabel: 'CUSTOM Next image',
    mainNextImageTitle: 'CUSTOM Next image',

    dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
    dotsContainerTitle: 'CUSTOM dots container title',
    dotAriaLabel: 'CUSTOM Navigate to image number',

    previewsContainerAriaLabel: 'CUSTOM Image previews',
    previewsContainerTitle: 'CUSTOM previews title',
    previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
    previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
    previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
    previewScrollNextTitle: 'CUSTOM Scroll next previews',

    carouselContainerAriaLabel: 'Current image and navigation',
    carouselContainerTitle: '',
    carouselPrevImageAriaLabel: 'Previous image',
    carouselPrevImageTitle: 'Previous image',
    carouselNextImageAriaLabel: 'Next image',
    carouselNextImageTitle: 'Next image',
    carouselPreviewsContainerAriaLabel: 'Image previews',
    carouselPreviewsContainerTitle: '',
    carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
    carouselPreviewScrollPrevTitle: 'Scroll previous previews',
    carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
    carouselPreviewScrollNextTitle: 'Scroll next previews'
  };

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        accessibilityConfig: this.accessibilityConfig
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(m,l){let n=this.modalGalleryService.open({id:m,images:this.images,currentImage:this.images[l],libConfig:{accessibilityConfig:this.accessibilityConfig}})}metaData(){this.uiService.setMetaData({title:"Demo accessibility"})}};r.\u0275fac=function(l){return new(l||r)},r.\u0275cmp=d({type:r,selectors:[["app-accessibility-page"]],decls:124,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,n){l&1&&(t(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Custom accessibility"),i()(),t(4,"p"),e(5,"Modal gallery example with custom accessibility"),i(),a(6,"br"),t(7,"h3"),e(8,"Live Demo"),i(),a(9,"br"),t(10,"button",3),g("click",function(){return n.openModal(300,0)}),e(11,"Click to open modal gallery id=1 at index=0"),i(),a(12,"br")(13,"br"),t(14,"section")(15,"h3"),e(16,"Code"),i(),a(17,"br"),t(18,"h4"),e(19,"Template"),i(),a(20,"ks-codemirror",4)(21,"br"),t(22,"h4"),e(23,"Typescript"),i(),a(24,"ks-codemirror",4),i(),a(25,"br")(26,"br"),t(27,"section")(28,"h3"),e(29,"Service inputs"),i(),a(30,"br"),t(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),i(),t(36,"th"),e(37,"Value"),i()()(),t(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),i()(),t(43,"td")(44,"div")(45,"i"),e(46,"Value: "),i(),t(47,"code"),e(48,"NUMERIC UNIQUE ID"),i()(),t(49,"div")(50,"b",6),e(51,"Unique id"),i()()()(),t(52,"tr")(53,"td")(54,"code"),e(55,"images"),i()(),t(56,"td")(57,"div")(58,"i"),e(59,"Value: "),i(),t(60,"code"),e(61,"Image[]"),i()(),t(62,"div")(63,"b",6),e(64,"Array of "),t(65,"code"),e(66,"Image"),i(),e(67," objects"),i()()()(),t(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),i()(),t(72,"td")(73,"div")(74,"i"),e(75,"Value: "),i(),t(76,"code"),e(77,"Image"),i()(),t(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),i(),e(82," object to show"),i()()()(),t(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),i()(),t(87,"td")(88,"div")(89,"i"),e(90,"Value: "),i(),t(91,"code"),e(92,"ModalLibConfig"),i()(),t(93,"div")(94,"b",6)(95,"code"),e(96,"ModalLibConfig"),i(),e(97," object to config the library. See below."),i()()()()()()(),t(98,"section")(99,"h4"),e(100,"ModalLibConfig"),i(),a(101,"br"),t(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),i(),t(107,"th"),e(108,"Value"),i()()(),t(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"accessibilityConfig"),i()(),t(114,"td")(115,"div")(116,"i"),e(117,"Value: "),i(),e(118,"see "),t(119,"code"),e(120,"accessibilityConfig"),i(),e(121," above"),i(),t(122,"div"),e(123,"Custom accessibility values."),i()()()()()()()),l&2&&(s(20),c("content",n.codeHtml)("language","html"),s(4),c("content",n.codeTypescript)("language","typescript"))},dependencies:[M,T],encapsulation:2});var x=r;export{x as AccessibilityComponent};
