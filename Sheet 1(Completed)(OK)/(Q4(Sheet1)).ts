interface User{
    id:number;
    name:string;
    eamil:string;
    IsSubscribed: boolean; 
}
const countSubscribedUsers = (...users:User[]):number => {
return users.filter(user=>user.IsSubscribed).length;
};
const Users: User[] = [{id:1,name:'Alice',eamil:'alice@gmail.com',IsSubscribed:true},{id:2,name:'Ahmed',eamil:'ahmed@gmail.com',IsSubscribed:false},{id:3,name:'mora',eamil:'mora@gmail.com',IsSubscribed:false},{id:4,name:'Alia',eamil:'alia@gmail.com',IsSubscribed:true}];
const res=document.getElementById("result") as HTMLDivElement;
res.textContent="Number of Subscribed Users: "+countSubscribedUsers(...Users);