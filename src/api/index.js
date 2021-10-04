// *********将所有的 API都放在一起，统一都暴露出去，在main中就不需要一个一个引入了，直接引入这个文档就行了*******************************

// import trademark from './product/trademark';
// import user from './user';

// export const trademark = trademark
// export const user = user;

// 这样写相当于上面代码1 4 代码的结合体，引入并暴露
export { default as trademark }
from './product/trademark';

export { default as user }
from './user';

export { default as category }
from './product/category';

export { default as attr }
from './product/attr';

export { default as spu }
from './product/spu';

export { default as sku }
from './product/sku';

/* 
    1.引入所有的模块api
        import trademark from './product/trademark';
        import user from './user';

    2.将引入的api对象分别暴漏出去
        export const trademark = trademark
        export const user = user;   
    3.最终index.js 暴漏出去的内容
        {
            trademark:{
                getTradeMark(){}
                addOrUpdate(){}
                deleteTradeMark(){}
            },
            user:{
                login(){}
                getInfo(){}
                logout(){}
            }
        }
*/