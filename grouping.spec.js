import {test,expect} from '@playwright/test'

test.beforeAll("beforeAll",async()=>{
    console.log("this is beforeAll hook.....");
})
test.afterAll("AfterAll",async()=>{
    console.log("this is AfterAll hook.....");
})
test.beforeEach("beforeEach",async()=>{
    console.log("this is beforeEach hook.....");
})
test.afterEach("afterEach",async()=>{
    console.log("this is afterEach hook.....");
})

test.describe.skip("testing1",async()=>{
    test("test1",async()=>{
        console.log("this is test 1.....");
    })
    test("test2",async()=>{
        console.log("this is test 2.....");
    })

})

test.describe.only("testing2",async()=>{
    test("test3",async()=>{
        console.log("this is test 3.....");
    })
    test("test4",async()=>{
        console.log("this is test 4.....");
    })
})
