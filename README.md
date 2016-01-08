# localStorage.js
封装了localStorage和sessionStorage的API。更快捷的操作相关API。

## 简化的API

localStorage
支持旧版ie的userData
```
ls.set(key,value);
ls.get(key);
ls.remove(key);
ls.clear();
```

sessionStorage
```
ss.set(key,value);
ss.get(key);
ss.remove(key);
ss.clear();
```

详情请查看我的博文:
[HTML5的sessionStorage和localStorage](http://www.cnblogs.com/52fhy/p/5113418.html)。