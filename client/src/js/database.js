import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // PUT the content into the database
  try {
    const db = await openDB("jate", 1);
    const tx = db.transaction("jate", "readwrite");
    const store = tx.objectStore("jate");
    await store.put(content);
    await tx.done;
    const request = store.put({ id: 1, value: content });
    const result = await request;
    console.log("putDb successful", content, result);
  } catch (error) {
    console.error("putDb failed", error);
  }
};

//  Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // GET the content from the database
  console.log("Get the content from the database");
  try {
    const db = await openDB("jate", 1);
    const tx = db.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const request = store.getAll();
    const result = await request;
    console.log("getDb successful", result);
    return result;
  } catch (error) {
    console.error("getDb failed", error);
  }
};

// call initdb() to create the database
initdb();
