// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  try {
    const dbs = {
     db1: db1,
     db2: db2,
    db3: db3
  }; 

 /*******Method2*******add [10-11*/
   // Step one find user in the database*
    const dataBaseName = await db1(id);
    console.log(dataBaseName)
    //step two*
    const basicInfo = await dbs[dataBaseName](1)
    console.log(basicInfo) 
  
  let db = await central(id);

  let [info, secure] = await Promise.all([dbs[bd], vault(id)]);

    return {id, ...info, ...secure};

    } catch (error) {
      return error;
    }
}
(async () => {
    const time = new Date().getTime()
    console.log(await getUserData(1));
    console.log("completed in:", new Date().getTime() - time, "ms");
    
})();


const user = getUserData()