import{a as E}from"./chunk-OP2DKRUE.js";import{a as w,b as M,c as T,d as C}from"./chunk-RTANLSU4.js";import"./chunk-CFZEAALU.js";import{b as f,c as x,m as I}from"./chunk-WT7P4ZYM.js";import"./chunk-FXPWCWKA.js";import{a as v}from"./chunk-U4QZNBVL.js";import{a as S}from"./chunk-CHPSQRLD.js";import"./chunk-MX6BWF72.js";import{Ab as t,Bb as o,Kb as h,Oa as c,X as u,Yb as e,Za as b,yb as g,zb as i}from"./chunk-RXF25YXR.js";var m=class m{constructor(){this.uiService=u(v);this.titleService=u(S);this.modalGalleryService=u(I);this.images=[...E];this.configHtml=M;this.configTs=w;this.count=0;this.titleService.titleEvent.emit("Examples - Gallery service"),this.codeHtml='  <button (click)="openModalWithAutoClose(303, images, 2)">Click to open modal gallery id=1 at index=2 (third image)</button>',this.codeHtml2='  <button (click)="openModalWithAutoUpdate(304, images, 2)">Click to open modal gallery id=1 at index=2 (third image)</button>',this.codeTypescript=`  private timeout: any;

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModalWithAutoClose(id: number, imagesArrayToUse: Image[], imageIndex: number): void {
    const imageToShow: Image = imagesArrayToUse[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArrayToUse,
      currentImage: imageToShow
    } as ModalGalleryConfig) as ModalGalleryRef;

    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      const galleryId: number = event.galleryId;
      // clear previous timeout
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        console.log('setTimeout end - closing gallery with id=' + galleryId);
        this.modalGalleryService.close(galleryId, false);
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.showSubscription) {
      this.showSubscription.unsubscribe();
    }
  }`,this.codeTypescript2=`  private count = 0;

  openModalWithAutoUpdate(id: number, imagesArrayToUse: Image[], imageIndex: number): void {
    const imageToShow: Image = imagesArrayToUse[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArrayToUse,
      currentImage: imageToShow
    } as ModalGalleryConfig) as ModalGalleryRef;
    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      if (this.count !== 0) {
        return;
      }
      const indexToRefresh = 1;
      const image: Image = new Image(1, {
        img: '../assets/images/gallery/img5.jpg',
        description: 'Description 2 updated with imag5.jpg'
      });

      // create the new array of images with the updated image inside
      const newImages: Image[] = [...this.images];
      newImages[indexToRefresh] = image;

      setTimeout(() => {
        this.modalGalleryService.updateModalImages(newImages);
        console.log('image updated successfully!');
      }, 4000);
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.showSubscription) {
      this.showSubscription.unsubscribe();
    }
  }`}openModalWithAutoClose(s,n,a){let d=n[a],p=this.modalGalleryService.open({id:s,images:n,currentImage:d});this.showSubscription=p.show$.subscribe(l=>{console.log("OUTPUT - show$: ",l);let r=l.galleryId;console.log(`onShowAutoCloseExample with id=${r} action: `+x[l.action]),console.log("onShowAutoCloseExample result:"+l.result),console.log("Starting timeout of 3 seconds to close modal gallery automatically"),clearTimeout(this.timeout),this.timeout=setTimeout(()=>{console.log("setTimeout end - closing gallery with id="+r),this.modalGalleryService.close(r,!1)},3e3)})}openModalWithAutoUpdate(s,n,a){let d=n[a],p=this.modalGalleryService.open({id:s,images:n,currentImage:d});this.showSubscription=p.show$.subscribe(l=>{if(console.log("OUTPUT - show$: ",l),this.count!==0)return;let r=1,A=new f(1,{img:"../assets/images/gallery/img5.jpg",description:"Description 2 updated with imag5.jpg"});console.log("updating image at index "+r+", after 4 seconds");let y=[...this.images];y[r]=A,setTimeout(()=>{this.modalGalleryService.updateModalImages(y),console.log("image updated successfully!")},4e3)})}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Demo gallery service"})}ngOnDestroy(){this.showSubscription&&this.showSubscription.unsubscribe()}};m.\u0275fac=function(n){return new(n||m)},m.\u0275cmp=b({type:m,selectors:[["app-auto-close-and-auto-update-page"]],decls:129,vars:8,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(n,a){n&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Gallery service example"),t()(),i(4,"p"),e(5,"Minimal example of Modal gallery service with "),i(6,"code"),e(7,"close"),t(),e(8," and "),i(9,"code"),e(10,"updateModalImages"),t(),e(11," methods."),t(),o(12,"br"),i(13,"h3"),e(14,"Live Demos"),t(),o(15,"br")(16,"br"),i(17,"h4"),e(18,"1) Example of "),i(19,"code"),e(20,"close"),t(),e(21," method"),t(),i(22,"p"),e(23,"Modal gallery (with id=1) "),i(24,"b"),e(25,"will close automatically after 3 seconds."),t()(),o(26,"br"),i(27,"button",3),h("click",function(){return a.openModalWithAutoClose(303,a.images,2)}),e(28,"Click to open modal gallery id=1 at index=2 (third image)"),t(),o(29,"br")(30,"br")(31,"br")(32,"br"),i(33,"section")(34,"h3"),e(35,"Code"),t(),o(36,"br"),i(37,"h4"),e(38,"Template"),t(),o(39,"ks-codemirror",4)(40,"br"),i(41,"h4"),e(42,"Typescript"),t(),o(43,"ks-codemirror",4),t(),o(44,"br")(45,"br"),i(46,"h4"),e(47,"2) Example of "),i(48,"code"),e(49,"updateModalImages"),t(),e(50," method"),t(),i(51,"p"),e(52,"Modal gallery (with id=2) "),i(53,"b"),e(54,"will update second image automatically after 4 seconds."),t()(),o(55,"br"),i(56,"button",3),h("click",function(){return a.openModalWithAutoUpdate(304,a.images,2)}),e(57,"Click to open modal gallery id=1 at index=2 (third image)"),t(),o(58,"br")(59,"br"),i(60,"section")(61,"h3"),e(62,"Code"),t(),o(63,"br"),i(64,"h4"),e(65,"Template"),t(),o(66,"ks-codemirror",4)(67,"br"),i(68,"h4"),e(69,"Typescript"),t(),o(70,"ks-codemirror",4),t(),o(71,"br")(72,"br"),i(73,"section")(74,"h3"),e(75,"Service inputs"),t(),o(76,"br"),i(77,"table",5)(78,"thead")(79,"tr")(80,"th"),e(81,"Input"),t(),i(82,"th"),e(83,"Value"),t()()(),i(84,"tbody")(85,"tr")(86,"td")(87,"code"),e(88,"id"),t()(),i(89,"td")(90,"div")(91,"i"),e(92,"Value: "),t(),i(93,"code"),e(94,"NUMERIC UNIQUE ID"),t()(),i(95,"div")(96,"b",6),e(97,"Unique id"),t()()()(),i(98,"tr")(99,"td")(100,"code"),e(101,"images"),t()(),i(102,"td")(103,"div")(104,"i"),e(105,"Value: "),t(),i(106,"code"),e(107,"Image[]"),t()(),i(108,"div")(109,"b",6),e(110,"Array of "),i(111,"code"),e(112,"Image"),t(),e(113," objects"),t()()()(),i(114,"tr")(115,"td")(116,"code"),e(117,"currentImage"),t()(),i(118,"td")(119,"div")(120,"i"),e(121,"Value: "),t(),i(122,"code"),e(123,"Image"),t()(),i(124,"div")(125,"b",6)(126,"code"),e(127,"Image"),t(),e(128," object to show"),t()()()()()()()()),n&2&&(c(39),g("content",a.codeHtml)("language","html"),c(4),g("content",a.codeTypescript)("language","typescript"),c(23),g("content",a.codeHtml2)("language","html"),c(4),g("content",a.codeTypescript2)("language","typescript"))},dependencies:[C,T],encapsulation:2});var G=m;export{G as AutoCloseAndAutoUpdateComponent};
