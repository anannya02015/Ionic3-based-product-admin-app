import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class __GAAL_WEBPACK_DAAK_BAIRER_WEBPACK {
  data: any;
//  apiUrl = 'http://127.0.0.1:8888/127.0.0.1:8078';

  apiUrl = 'http://192.168.43.78:8888/192.168.43.78:8078';
  //apiUrl = 'http://192.168.43.78:8078';
//apiUrl = 'http://192.168.43.255:8888/192.168.43.255:8078';

  
  //apiUrl = 'http://localhost:8078';

 //apiUrl = 'http://127.0.0.1:8888/ec2-13-126-15-14.ap-south-1.compute.amazonaws.com'

 //apiUrl = 'http://ec2-13-126-15-14.ap-south-1.compute.amazonaws.com'
 
   headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST,  PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    //'Access-Control-Allow-Credentials': true ,
    'Content-Type': 'application/json'
});

getheaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  //'Access-Control-Allow-Methods': 'GET, POST,  PUT, PATCH, DELETE',
  'Access-Control-Allow-Headers': 'X-Requested-With',
  'Content-Type': 'Accept'
  //'Access-Control-Allow-Credentials': true ,
  
});


  constructor(public http: Http) {
    console.log('Hello Restapi Provider');
  }

  getUsers() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise((resolve,reject) => {
      this.http.get(this.apiUrl+'/api/seller')
        .map(res => res.json()) 
        .subscribe(data => {
          console.log("inside getUsers "+data)
          this.data = data;
          resolve(this.data);
        });
    });
    
    
  }

  _GG_BAAL_saabPROKARniyeAAY___() {
   
    return new Promise((resolve,reject) => {
      this.http.get(this.apiUrl+'/api/__saabProkar_GULI_NIYE_AAIY_BAAAB__')
        .map(res => res.json()) 
        .subscribe(data => {
       
          this.data = data;
          resolve(this.data);
        });
    });
    
    
  }
  _GG_BAAL_saabPROKARniyeAAYGAACH___() {
  //  if (this.data) {
    //  return Promise.resolve(this.data);
    //}

    return new Promise((resolve,reject) => {
      this.http.get(this.apiUrl+'/api/__saabProkar_GULI_NIYE_AAIY_BAAAB__GAACH')
      //  .map(res => res.json()) 
        .subscribe(data => {      
       
          var jsonvalue = data["_body"];
        //  console.log("inside categorytree "+jsonvalue)
          var obj = eval('(' + jsonvalue + ')');
          
          resolve(obj);
        });
    });
    
    
  }
//,(err) => {
         // reject(err);}); }
  saveUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/seller', data,{headers:this.headers}
     )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  saveCategory(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/categories', data,{headers:this.headers}
     )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  editCategory(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/editcategories', data,{headers:this.headers}
     )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
  saveProduct(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/products', data,{headers:this.headers}
     ).map(res => res.json()) 
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  editProduct(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/editproducts', data,{headers:this.headers}
     )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getMaxProductID() {
    // if (this.data) {
     //  return Promise.resolve(this.data);
    // }
 
     return new Promise((resolve,reject) => {
       this.http.get(this.apiUrl+'/api/getmaxproduct')
         .map(res => res.json()) 
         .subscribe(data => {
        //   console.log("inside getAllcategories "+data)
           this.data = data;
           resolve(this.data);
         });
     });
     
     
   }
  
   getProductsOfcategory(catid) {
    // if (this.data) {
     //  return Promise.resolve(this.data);
    // }
    var data:any={"categoryid":catid}
        
    return new Promise((resolve,reject) => {
       this.http.post(this.apiUrl+'/api/getProductsOfcategory',data,{headers:this.headers})
         .map(res => res.json()) 
         .subscribe(data => {
           console.log("inside getProductsOfcategory "+data)
           this.data = data;
           resolve(this.data);
         });
     });

     
     
   }

   headermulti = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST,  PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    //'Access-Control-Allow-Credentials': true ,
  //  'Content-Type': 'multipart/form-data'
});

   __ytuiasfas3sss__(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/utnbjhhhhhed', data,{headers:this.headers}
     )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  __crtyvvvvvvvvvv_(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/_jhonRam_', data,{headers:this.headers}
     )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  __ytuiasfas3eee__(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/wertyu', data,{headers:this.headermulti}
     )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  

  _droomyLget_(_ramu_) {
    // if (this.data) {
     //  return Promise.resolve(this.data);
    // }
    var data:any={"chimi":_ramu_}
        
    return new Promise((resolve,reject) => {
       this.http.post(this.apiUrl+'/api/bulbu',data,{headers:this.headers})
         .map(res => res.json()) 
         .subscribe(data => {
           console.log("inside bulbu "+data)
           this.data = data;
           resolve(this.data);
         });
     });
     
   }

   ___domidooms__(_ramu_) {
    // if (this.data) {
     //  return Promise.resolve(this.data);
    // }
    var data:any={"chimi":_ramu_}
        
    return new Promise((resolve,reject) => {
       this.http.post(this.apiUrl+'/api/daakJinisrang',data,{headers:this.headers})
         .map(res => res.json()) 
         .subscribe(data => {
           console.log("inside bulbu "+data)
           this.data = data;
           resolve(this.data);
         });
     });
     
   }

   ___damrusetDUMDUMNO__(_ramu_) {
    // if (this.data) {
     //  return Promise.resolve(this.data);
    // }
    var data:any={"chimi":_ramu_}
        
    return new Promise((resolve,reject) => {
       this.http.post(this.apiUrl+'/api/ganuHor',data,{headers:this.headers})
         .map(res => res.json()) 
         .subscribe(data => {
           console.log("inside bulbu "+data)
           this.data = data;
           resolve(this.data);
         });
     });
     
   }

   
   _doly666_A(data) {
     return new Promise((resolve, reject) => {
       this.http.post(this.apiUrl+'/api/_doly666_A', data,{headers:this.headers}
      )
         .subscribe(res => {
           resolve(res);
         }, (err) => {
           reject(err);
         });
     });
   }

   
   

   _doly777_A(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/_doly777_A', data,{headers:this.headers}
     )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  _rang__EEEEE_(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/_rang__EEEEE_', data,{headers:this.headermulti}
     )
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
