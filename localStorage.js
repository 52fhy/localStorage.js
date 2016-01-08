/*
 * localStorage
 * 支持 set,get,remove,clear
 * 支持 旧版ie的userData
 *
 * 2016-1-8 16:00:26
 */
;(function(w){
	
	var localData = {
        hname:location.hostname ? location.hostname : 'localStatus',
        isLocalStorage:w.localStorage ? true : false,
        dataDom:null,

        initDom:function(){ //初始化userData
            if(!this.dataDom){
                try{
                    this.dataDom = document.createElement('input');//这里使用hidden的input元素
                    this.dataDom.type = 'hidden';
                    this.dataDom.style.display = "none";
                    this.dataDom.addBehavior('#default#userData');//这是userData的语法
                    document.body.appendChild(this.dataDom);
                    var exDate = new Date();
                    exDate = exDate.getDate() + 30;
                    this.dataDom.expires = exDate.toUTCString();//设定过期时间
                }catch(ex){
                    return false;
                }
            }
            return true;
        },
        set:function(key,value){
            if(this.isLocalStorage){
                w.localStorage.setItem(key, value);
            }else{
                if(this.initDom()){
                    this.dataDom.load(this.hname);
                    this.dataDom.setAttribute(key, value);
                    this.dataDom.save(this.hname)
                }
            }
        },
        get:function(key){
            if(this.isLocalStorage){
                return w.localStorage.getItem(key);
            }else{
                if(this.initDom()){
                    this.dataDom.load(this.hname);
                    return this.dataDom.getAttribute(key);
                }
            }
        },
        remove:function(key){
            if(this.isLocalStorage){
                localStorage.removeItem(key);
            }else{
                if(this.initDom()){
                    this.dataDom.load(this.hname);
                    this.dataDom.removeAttribute(key);
                    this.dataDom.save(this.hname)
                }
            }
        },
        clear:function(){
        	if(this.isLocalStorage){
                localStorage.clear();
            }
        }
    };
	
	w.ls = w.localData = localData;
})(window);

/*
 * sessionStorage
 * 支持 set,get,remove,clear
 */
(function(w){
	var sessionData = {
		set : function(key, value){
			return w.sessionStorage.setItem(key, value);
		},
		get : function(key){
			return w.sessionStorage.getItem(key);
		},
		remove : function(key){
			return w.sessionStorage.removeItem(key);
		},
		clear : function(){
			return w.sessionStorage.clear();
		},
	};
	
	w.ss = w.sessionData = sessionData;
})(window);

