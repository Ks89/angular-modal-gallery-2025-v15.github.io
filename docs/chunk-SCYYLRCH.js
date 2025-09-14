import{a as G}from"./chunk-OP2DKRUE.js";import{a as A,b as O,c as R,d as V}from"./chunk-RTANLSU4.js";import"./chunk-CFZEAALU.js";import{b as P,m as k}from"./chunk-WT7P4ZYM.js";import"./chunk-FXPWCWKA.js";import{a as _}from"./chunk-U4QZNBVL.js";import{a as D}from"./chunk-CHPSQRLD.js";import{e as M,f as I}from"./chunk-MX6BWF72.js";import{Ab as t,Bb as n,Fb as f,Gb as w,Kb as h,Oa as m,Rb as x,Sb as b,X as s,Yb as e,Za as u,Zb as S,ba as g,ca as v,cb as c,jc as E,kc as T,lc as y,tc as C,yb as d,zb as i}from"./chunk-RXF25YXR.js";var U=["previewsTemplate"];function N(p,r){p&1&&f(0)}function j(p,r){if(p&1&&(i(0,"div",8)(1,"div",9),e(2),E(3,"date"),t(),i(4,"div",10),c(5,N,1,0,"ng-container",11),t()()),p&2){let a=r.preview,l=r.defaultTemplate;m(2),S(T(3,2,a.modal.pictureDate)),m(3),d("ngTemplateOutlet",l)}}var o=class o{constructor(){this.uiService=s(_);this.titleService=s(D);this.modalGalleryService=s(k);this.previewsTemplate=C("previewsTemplate");this.configHtml=O;this.configTs=A;this.titleService.titleEvent.emit("Examples - Previews custom template"),this.codeHtml=`<button (click)="openModal(334, 0)">Open modal gallery id=1 at index=0</button>
<ng-template #previewsTemplate let-preview="preview" let-defaultTemplate="defaultTemplate">
  <div class="preview-block">
    <div class="preview-date">{{ preview.modal.pictureDate | date }}</div>
    <div class="preview-default">
      <ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>
    </div>
  </div>
</ng-template>`,this.codeCss=`.preview-block {
  scroll-margin-left: 10px;
  margin-right: 10px;
}
.preview-date {
  text-align: center;
  color: #fff;
  margin-bottom: 3px;
  opacity: 0.8;
}
.preview-default {
  text-align: center;
}`,this.codeTypescript=`// Here, we extends ModalImage, but we could extend Image and/or PlainImage as well
interface CustomModalImage extends ModalImage {
  pictureDate: Date;
}

@Component()
export class MyComponent implements OnInit {
    // a reference to the template defined in the HTML part
  @ViewChild('previewsTemplate') previewsTemplate?: TemplateRef<HTMLElement>;

  images: Image[] = []; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  ngOnInit(): void {
    // when creating the Image array, use the CustomModalImage structure
    // to add the picture-specific data
    this.images.push(new Image(
      imageId,
      {
        img: imageUrl,
        pictureDate: imageDate, // here, we provide the date of each picture, to show in the previews
        ...,
      } as CustomModalImage,
      // Thumbnail (aka 'plain' image)
      {
        img: thumbUrl,
      } as PlainImage,
    );
  }

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: true,
        }
      } as PlainLibConfig,
      previewsTemplate: this.previewsTemplate,
    } as ModalGalleryConfig) as ModalGalleryRef;
  }
}`;let r=[new Date(2022,1,13,14,15),new Date(2022,1,15,16,30),new Date(2022,1,16,11,0),new Date(2022,1,20,14,15),new Date(2022,2,2,17,0),new Date(2022,2,10,18,0),new Date(2022,2,13,9,0),new Date(2022,3,3,9,30)];this.images=G.map((a,l)=>new P(a.id,Object.assign({},a.modal,{pictureDate:r[l]}),a.plain))}ngOnInit(){this.metaData()}openModal(r,a){let l=this.modalGalleryService.open({id:r,images:this.images,currentImage:this.images[a],libConfig:{previewConfig:{visible:!0}},previewsTemplate:this.previewsTemplate()})}metaData(){this.uiService.setMetaData({title:"Demo previews custom template"})}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["app-previews-template"]],viewQuery:function(a,l){a&1&&x(l.previewsTemplate,U,5),a&2&&b()},decls:161,vars:6,consts:[["previewsTemplate",""],[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[1,"preview-block"],[1,"preview-date"],[1,"preview-default"],[4,"ngTemplateOutlet"]],template:function(a,l){if(a&1){let H=w();i(0,"div",1)(1,"h2",2)(2,"a",3),e(3,"Previews custom template with additional data"),t()(),i(4,"p"),e(5,"Modal gallery example "),i(6,"b"),e(7,"with custom previews"),t(),e(8,", using an Angular template and custom image-related data."),t(),i(9,"p"),e(10,"This example demonstrates how to use custom image-specific data (here, the date of the picture) to render the previews."),t(),n(11,"br"),i(12,"h3"),e(13,"Live Demo"),t(),n(14,"br"),i(15,"button",4),h("click",function(){return g(H),v(l.openModal(334,0))}),e(16,"Click to open modal gallery id=1 at index=0"),t(),c(17,j,6,4,"ng-template",null,0,y),n(19,"br")(20,"br"),i(21,"section")(22,"h3"),e(23,"Code"),t(),n(24,"br"),i(25,"h4"),e(26,"Template"),t(),n(27,"ks-codemirror",5)(28,"br"),i(29,"h4"),e(30,"Css"),t(),n(31,"ks-codemirror",5)(32,"br"),i(33,"h4"),e(34,"Typescript"),t(),n(35,"ks-codemirror",5),t(),n(36,"br")(37,"br"),i(38,"section")(39,"h3"),e(40,"Service inputs"),t(),n(41,"br"),i(42,"table",6)(43,"thead")(44,"tr")(45,"th"),e(46,"Input"),t(),i(47,"th"),e(48,"Value"),t()()(),i(49,"tbody")(50,"tr")(51,"td")(52,"code"),e(53,"id"),t()(),i(54,"td")(55,"div")(56,"i"),e(57,"Value: "),t(),i(58,"code"),e(59,"NUMERIC UNIQUE ID"),t()(),i(60,"div")(61,"b",7),e(62,"Unique id"),t()()()(),i(63,"tr")(64,"td")(65,"code"),e(66,"images"),t()(),i(67,"td")(68,"div")(69,"i"),e(70,"Value: "),t(),i(71,"code"),e(72,"Image[]"),t()(),i(73,"div")(74,"b",7),e(75,"Array of "),i(76,"code"),e(77,"Image"),t(),e(78," objects"),t()()()(),i(79,"tr")(80,"td")(81,"code"),e(82,"currentImage"),t()(),i(83,"td")(84,"div")(85,"i"),e(86,"Value: "),t(),i(87,"code"),e(88,"Image"),t()(),i(89,"div")(90,"b",7)(91,"code"),e(92,"Image"),t(),e(93," object to show"),t()()()(),i(94,"tr")(95,"td")(96,"code"),e(97,"libConfig"),t()(),i(98,"td")(99,"div")(100,"i"),e(101,"Value: "),t(),i(102,"code"),e(103,"ModalLibConfig"),t()(),i(104,"div")(105,"b",7)(106,"code"),e(107,"ModalLibConfig"),t(),e(108," object to config the library. See below."),t()()()(),i(109,"tr")(110,"td")(111,"code"),e(112,"previewsTemplate"),t()(),i(113,"td")(114,"div")(115,"i"),e(116,"Value: "),t(),i(117,"code"),e(118,"TemplateRef<HTMLElement>"),t()(),i(119,"div")(120,"b",7),e(121,"A reference to an Angular template."),t(),n(122,"br"),e(123," This template can take 2 template variables: "),i(124,"ul")(125,"li")(126,"b"),e(127,"let-preview"),t(),e(128,": gives access to the "),i(129,"code"),e(130,"Image"),t(),e(131," associated with the preview"),t(),i(132,"li")(133,"b"),e(134,"let-defaultTemplate"),t(),e(135,": gives access to the default template used to render the preview; helpful if the need is to wrap the preview with additional information. Insert the default template with: "),i(136,"code"),e(137,'<ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>'),t(),e(138,". "),t()()()()()()()(),i(139,"section")(140,"h4"),e(141,"ModalLibConfig"),t(),n(142,"br"),i(143,"table",6)(144,"thead")(145,"tr")(146,"th"),e(147,"Input"),t(),i(148,"th"),e(149,"Value"),t()()(),i(150,"tbody")(151,"tr")(152,"td")(153,"code"),e(154,"previewConfig"),t()(),i(155,"td")(156,"div")(157,"i"),e(158,"Value: "),t(),i(159,"code"),e(160,"{ visible: true }"),t()()()()()()()()}a&2&&(m(27),d("content",l.codeHtml)("language","html"),m(4),d("content",l.codeCss)("language","css"),m(4),d("content",l.codeTypescript)("language","typescript"))},dependencies:[M,V,R,I],styles:[".preview-block[_ngcontent-%COMP%]{scroll-margin-left:10px;margin-right:10px}.preview-date[_ngcontent-%COMP%]{text-align:center;color:#fff;margin-bottom:3px;opacity:.8}.preview-default[_ngcontent-%COMP%]{text-align:center}"]});var L=o;export{L as PreviewsTemplateAdditionalDataComponent};
