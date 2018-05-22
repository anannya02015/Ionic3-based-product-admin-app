import { Component } from '@angular/core';
import {  LoadingController,NavParams, AlertController,ToastController, NavController} from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from  'ng2-image-compress';
import { __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK } from '../../providers/restapi-service/restapi-service';

import { _halumhulum_ } from '../product/product';
import { timedelay} from '../base/base.constants';
import { TranslateService } from 'ng2-translate';
import { Storage } from '@ionic/storage';

@Component({
  
  templateUrl: '__ytuiPesdI__.html'
})

export class __ytuiPesdI__ {

  imageURI:any;
  imageFileName:any;

  processedImages: any = [];

  previousElementClick:any;

  //checkedValue:boolean=false
  defaultalreadyset:any
  itemName:any;
  selecImage: any={fileName:'',imageDataUrl:''} ;
  
  showTitle: boolean = false;
  //radioCheckValue:boolean=true
  _damrusetDUMDUM__:boolean = false;

  //alreadyClicked:boolean=false;
  prod_short_desc:any
  prod_long_desc:any

  whenfileselected:boolean = false
  dumdum:any
  mode:String
   formData={
    imgRecArray : '',
    images : '',
 //   "description" : this.description
}
  protected  _broadlight_:any= [{prodid:'',compid:'',imagename:'',default:false,fileType:''}];

  constructor(public navCtrl: NavController,    
  //  private camera: Camera,
    private imgCompressService: ImageCompressService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public translate: TranslateService,
    public storage:Storage,
    public alertCtrl: AlertController,
    public restapiService: __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK,
    public navParams: NavParams) {

      this.dumdum = navParams.get('dumdum');  
      this.mode = navParams.get('mode');
      this.defaultalreadyset= navParams.get('defaultalreadyset');

      if(this.defaultalreadyset ==undefined){
        this.defaultalreadyset = false
      }
      //this.storage.set("previousElementClick","faltu")

      var dataPromise =this.storage.get("'"+this.dumdum+"'");
      var pro;
             dataPromise.then(data => {         
              
               var dataJson = JSON.parse(data)
              
               if(dataJson){
                 console.log("data.value  = "+dataJson.value);
                 pro=dataJson             
                
                 this.prod_short_desc=pro.prod_short_desc
                this.prod_long_desc=pro.prod_long_desc
               
               }
               
           });

           
    }
    
    
    __krkrkrkopueeeee_(fileInput: any) {
    let fileList: FileList;
 
    let images: Array<IImage> = [];
    
    let i:number=0
    ImageCompressService.filesToCompressedImageSource(fileInput.target.files).then(observableImages => {
      observableImages.subscribe((image) => {

        
                  images.push(image);

                  

                  console.log("i == "+i+" image.compressedImage.fileName =="+image.compressedImage.fileName);
                //  console.log("i == "+i+" image.compressedImage.imageDataUrl =="+image.compressedImage.imageDataUrl);
               //   console.log("i == "+i+" image.compressedImage.imageObjectUrl =="+image.compressedImage.imageObjectUrl);
                  console.log("i == "+i+" image.compressedImage.type =="+image.compressedImage.type);
/*
                  let ext =image.compressedImage.type
                  if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                    return callback(res.end('Only images are allowed'), null)
                  }
                  */

                  i=i+1

                }, (error) => {
                  console.log("Error while converting");
                }, () => {
                  this.processedImages = images;     
                          this.showTitle = true;  
                          
                          this.whenfileselected = true
                          console.log(" at complete i == "+i+ this.whenfileselected);
                          
            });
    });
 
 
    
  }
 

  close(){
    //this.navCtrl.pop()
    this.navCtrl.push(_halumhulum_, {
      mode: 'edit',
      dumdum: this.dumdum,
      prod_short_desc:this.prod_short_desc,
      prod_long_desc:this.prod_long_desc,
      segment:"image"
    });
  }

  

  
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  onSelectionChange(selectedfileName:any){


    this.selecImage.fileName=selectedfileName
    
    console.log("this.previousElementClick ==="+this.previousElementClick)

    console.log("selectedfileName ==="+selectedfileName)
  
 
    let msg:any = ''
    this.translate.get('alert_msg_default_image').subscribe((res: string) => {
      //return res;
      msg=res
  });//this.translate.get('alert_msg_default_image').

    //let defaultalreadyset= this.storage.get('defaultalreadyset')
    if(this.defaultalreadyset==true){
      const alert = this.alertCtrl.create({
        //title: '',
        subTitle: msg,//'NOTE: Another image has been already selected as default that will NO longer be default and this one will be default instead',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
                                  
                    //  this.checkedValue=true          
                   //   this.radioCheckValue=false
                      this.itemName = selectedfileName

                      console.log('Cancel clicked');
            }
          },
          {
            text: 'Ok',
            handler: () => {
                        this._damrusetDUMDUM__=true
                      //  this.checkedValue=true          
                        this.itemName = selectedfileName

              
                
                        var buttEle= document.getElementById(selectedfileName);
                        console.log("just a timedealy")                
                       if(this.previousElementClick && this.previousElementClick!="faltu"){
                        var  x=this.previousElementClick
                        var previousClickedButton= document.getElementById(this.previousElementClick);
                        if(previousClickedButton)
                          previousClickedButton.removeAttribute("disabled");//,"null")             
                      
                     
                      }
                     
                        this.previousElementClick = selectedfileName
                        this.storage.set("previousElementClick",this.previousElementClick)
                        
                        buttEle.setAttribute("disabled","true")
                        //this.alreadyClicked=true
           
                          
              console.log('Buy clicked');
                  }
          }
        ]
      });
      alert.present();    

    }else{
            
        this.itemName = selectedfileName
        var buttEle= document.getElementById(selectedfileName);
        buttEle.setAttribute("disabled","true")
        //console.log("just a timedealy")                
        if(this.previousElementClick && this.previousElementClick!="faltu"){
        var  x=this.previousElementClick
        var previousClickedButton= document.getElementById(this.previousElementClick);
        console.log("Now I am going to remove disabled attribute,, previousClickedButton = "+previousClickedButton)                
        if(previousClickedButton)
          previousClickedButton.removeAttribute("disabled");//,"null")                   
     
      }
     
        this.previousElementClick = selectedfileName
       // this.storage.set("previousElementClick",this.previousElementClick)
        
       
    }

  }
  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    //let item of processedImages">
    //item.compressedImage.imageDataUrl}}" 
    //_broadlight_= [{prodid:'',compid:'',imagename:'',default:false}];
    
  let imageRec={prodid:'',compid:'',imagename:'',default:false,fileType:'',_fiiuytrfdd_:''}

  let images:any=[]
let makeFirstDefault:boolean = false
  for(var i in this.processedImages) {   
    imageRec={prodid:'',compid:'',imagename:'',default:false,fileType:'',_fiiuytrfdd_:''}  
    imageRec.prodid=this.dumdum     
    let item = this.processedImages[i]

    imageRec.imagename = item.compressedImage.fileName;
    imageRec.fileType=item.compressedImage.type

    if(!makeFirstDefault && !this.defaultalreadyset){
      imageRec.default=true
      makeFirstDefault = true
    }
    if(imageRec.imagename == this.selecImage.fileName){
      imageRec.default=true
    }

    imageRec._fiiuytrfdd_=item.compressedImage.imageDataUrl
    console.log(" while upload imageRec.imagename = "+imageRec.imagename)
    //console.log("while upload  imageRec.fileType = "+imageRec.fileType)
    console.log(" while upload  imageRec.default = "+imageRec.default)

    this._broadlight_.push(imageRec)
 //   images.push(item.compressedImage.imageDataUrl)
  
    
  }

  //this.formData.imgRecArray=this._broadlight_
 // this.formData.images=images
 //   "description" : this.description

 if(this._damrusetDUMDUM__){
  this.restapiService.___damrusetDUMDUMNO__(this.dumdum).then((result) => {
    console.log(result);  
    setTimeout(() => {               
      console.log("just a timedealy")   
       }, 3000);   
  }, (err) => {
    loader.dismiss();
    this.presentToast("Image uploading failed due to err "+err);
});
 }


 
 
    this.restapiService.__ytuiasfas3sss__(this._broadlight_).then((result) => {
      console.log(result);
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
      //this.navCtrl.pop()
      
    
    }, (err) => {
      loader.dismiss();
      this.presentToast("Image uploading failed due to err "+err);
  });
  
  


  setTimeout(() => { 
        this.navCtrl.push(_halumhulum_, {
    mode: 'edit',
    dumdum: this.dumdum,
    prod_short_desc:this.prod_short_desc,
    prod_long_desc:this.prod_long_desc,
    segment:"image"     });}, timedelay); 



    console.log("this.mode =============================="+this.mode);
    /*
    if(this.mode=="edit"){

            console.log("the data being sent _id ====="+this._broadlight_._id)
            console.log("the data being sent id ====="+this._broadlight_.id)
            console.log("the data being sent  parentId====="+this._broadlight_.parentId)
            console.log("the data being sent value ====="+this._broadlight_.value)
            console.log("the data being sent desc ====="+this._broadlight_.desc)
            
            console.log("this.Product being saved == "+this._broadlight_)
            
            //reset the _broadlight_ value n storage with the latest product record for the given product id
           // this.storage.set("'"+this.dumdum+"'",JSON.stringify(this.product))

           
           


    //location.reload
    //location.reload(true)
    }else{
      */
          
           console.log("the data being sent to server is =====")  
          //  console.log("this.Product being saved == "+JSON.stringify(this.product))


            this._broadlight_.prod_short_desc = this._broadlight_.value
            this._broadlight_.prod_long_desc = this._broadlight_.value

            this._broadlight_.dyna_field1  = "sourav"
          /*  

            this.restapiService.__ytuiasfas3sss__(this._broadlight_).then((result) => {
              console.log(result);
             // this.shoSaveNextButton=true
            //  this.disableOthersegmentbutton=false
            loader.dismiss();
            this.presentToast("Image uploaded successfully");

            }, (err) => {
              console.log(err);
            //  this.submitAttempt = true;
            loader.dismiss();
            this.presentToast("Image uploading failed due to err "+err);
            });

            */
          
    /*
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
    */
//  }
}
}
