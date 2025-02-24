import {test,expect} from '@playwright/test'
var userid;
test("get",async({request})=>{
   const response= await request.get('https://reqres.in/api/users?page=2')
   console.log(await response.json());
   expect(response.status()).toBe(200);

})

test("post",async({request})=>{
    const response= await request.post('https://reqres.in/api/users',
                                       {
                                        data:{"name": "morpheus","job": "leader"},
                                        headers:{"Accept":"Application/json"}
                                       });

    console.log(await response.json());
    expect(response.status()).toBe(201);
    var res=await response.json();
    userid=res.id;
})

test("put",async({request})=>{
    const response= await request.put(`https://reqres.in/api/users/{userid}`,
        {
         data:{"name": "morp","job": "engineer"},
         headers:{"Accept":"Application/json"}
        });

console.log(await response.json());
expect(response.status()).toBe(200);
})

test("delete",async({request})=>{
    const response=await request.delete(`https://reqres.in/api/users/{userid}`);
    expect(response.status()).toBe(204);
})