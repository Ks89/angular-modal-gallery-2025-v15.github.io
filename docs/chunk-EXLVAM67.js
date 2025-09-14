import{a as E}from"./chunk-OP2DKRUE.js";import{a as _,b as O,c as P,d as D}from"./chunk-RTANLSU4.js";import"./chunk-CFZEAALU.js";import{m as I}from"./chunk-WT7P4ZYM.js";import"./chunk-FXPWCWKA.js";import{a as M}from"./chunk-U4QZNBVL.js";import{a as w}from"./chunk-CHPSQRLD.js";import"./chunk-MX6BWF72.js";import{Ab as e,Bb as o,Gb as v,Ka as h,Kb as S,Lb as C,Oa as m,X as s,Yb as i,Za as f,_b as b,ba as g,ca as u,wb as y,xb as x,yb as c,zb as t}from"./chunk-RXF25YXR.js";var R=(d,a)=>a.id;function T(d,a){if(d&1){let n=v();t(0,"figure",4)(1,"img",8),S("click",function(){let p=g(n).$implicit,G=C();return u(G.openImageModalRowDescription(206,p))}),e(),t(2,"figcaption",9),i(3),e()()}if(d&2){let n=a.$implicit;m(),c("src",n.modal.img,h),m(2),b("",n.modal.description?n.modal.description:"No description available"," ")}}var l=class l{constructor(){this.uiService=s(M);this.modalGalleryService=s(I);this.titleService=s(w);this.images=[...E];this.configHtml=O;this.configTs=_;this.titleService.titleEvent.emit("Examples - Plain gallery custom with description"),this.codeHtml=`<div class="my-app-custom-plain-container-with-desc">
    @for (img of images; track img.id) {
      <figure class="my-app-custom-image-with-desc">
        <img [src]="img.modal.img"
             (click)="openImageModalRowDescription(206, img)"/>
        <figcaption class="description">{{ img.modal.description ? img.modal.description : 'No description available' }}
        </figcaption>
      </figure>
    }
  </div>
`,this.codeTypescript=`
  constructor(private modalGalleryService: ModalGalleryService) {}

  openImageModalRowDescription(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[index]
    }) as ModalGalleryRef;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };`,this.codeScss=`$background: rgba(0, 0, 0, .7);

.my-app-custom-plain-container-with-desc {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  figure {
    margin: 0;
    position: relative;

    img {
      max-width: 100%;
      height: auto;
      cursor: pointer;
    }

    figcaption {
      background: rgba(0, 0, 0, .5);
      color: #fff;
      font-size: 85%;
      padding: 5px;
      position: absolute;
      bottom: 3px;
      left: 0;
      right: 0;
    }
  }

  .description {
    font-weight: 400;
    text-align: center;
  }

  .my-app-custom-image-with-desc {
    height: auto;
    margin-right: 2px;
    width: 200px;
    align-self: start;
  }
}`}ngOnInit(){this.metaData()}openImageModalRowDescription(a,n){console.log("Opening modal gallery from custom plain gallery row and description, with image: ",n);let r=this.getCurrentIndexCustomLayout(n,this.images),p=this.modalGalleryService.open({id:a,images:this.images,currentImage:this.images[r]})}metaData(){this.uiService.setMetaData({title:"Demo plain custom desc"})}getCurrentIndexCustomLayout(a,n){return a?n.indexOf(a):-1}};l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=f({type:l,selectors:[["app-plain-gallery-custom-with-desc-page"]],decls:73,vars:6,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"my-app-custom-plain-container-with-desc"],[1,"my-app-custom-image-with-desc"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[3,"click","src"],[1,"description"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"h2",1)(2,"a",2),i(3,"Plain gallery custom with description"),e()(),t(4,"p"),i(5,"Custom plain gallery with descriptions."),e(),o(6,"br"),t(7,"h3"),i(8,"Live Demo"),e(),o(9,"br"),t(10,"div",3),y(11,T,4,2,"figure",4,R),e(),o(13,"br")(14,"br"),t(15,"section")(16,"h3"),i(17,"Code"),e(),o(18,"br"),t(19,"h4"),i(20,"Template"),e(),o(21,"ks-codemirror",5)(22,"br"),t(23,"h4"),i(24,"Typescript"),e(),o(25,"ks-codemirror",5)(26,"br"),t(27,"h3"),i(28,"Styles (SCSS)"),e(),o(29,"ks-codemirror",5),e(),o(30,"br")(31,"br"),t(32,"section")(33,"h3"),i(34,"Details"),e(),o(35,"br"),t(36,"table",6)(37,"thead")(38,"tr")(39,"th"),i(40,"Input (.html)"),e(),t(41,"th"),i(42,"Value (.ts)"),e()()(),t(43,"tbody")(44,"tr")(45,"td")(46,"code"),i(47,"id"),e()(),t(48,"td")(49,"div")(50,"i"),i(51,"Value: "),e(),t(52,"code"),i(53,"NUMERIC UNIQUE ID"),e()(),t(54,"div")(55,"b",7),i(56,"Unique id"),e()()()(),t(57,"tr")(58,"td")(59,"code"),i(60,"images"),e()(),t(61,"td")(62,"div")(63,"i"),i(64,"Value: "),e(),t(65,"code"),i(66,"Image[]"),e()(),t(67,"div")(68,"b",7),i(69,"Array of "),t(70,"code"),i(71,"Image"),e(),i(72," objects"),e()()()()()()()()),n&2&&(m(11),x(r.images),m(10),c("content",r.codeHtml)("language","html"),m(4),c("content",r.codeTypescript)("language","typescript"),m(4),c("content",r.codeScss)("language","scss"))},dependencies:[D,P],styles:[".my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:0;position:relative}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;cursor:pointer}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{background:#00000080;color:#fff;font-size:85%;padding:5px;position:absolute;bottom:3px;left:0;right:0}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:400;text-align:center}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   .my-app-custom-image-with-desc[_ngcontent-%COMP%]{height:auto;margin-right:2px;width:200px;align-self:start}"]});var k=l;export{k as PlainGalleryCustomWithDescComponent};
