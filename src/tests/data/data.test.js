import { add, edit, remove, get } from "../../data/data";
import expenses from "../fixtures/expenses";

test("should add expense to app data successfully", () => {
    const uid = "testuserid456";
    const expense = expenses[0];

    const response = add(uid, expense);

    expect(typeof response.ref.key).toBe("string");
});

test("should edit expense in app data successfully", async () => {
    const uid = "testuserid456";
    const id = "testexpenseid675";
    const edited = expenses[1];
    let response = "some response";

    response = await edit(uid, id, edited);
    
    expect(response).toBeFalsy();
});


test("should remove expense from app data successfully", async () => {
    const uid = "testuserid456";
    const id = "testexpenseid675";
    let response = "some response";

    response = await remove(uid, id);
    
    expect(response).toBeFalsy();
});

test("should retrieve expenses from app data successfully", (done) => {
    const uid = "testuserid456";

    get(uid).then((snapshot) => {
        const content = snapshot.val();
        const expense = content[Object.keys(content)[0]];
        expect(expense).toHaveProperty("description");
        expect(expense).toHaveProperty("createdAt");
        expect(expense).toHaveProperty("amount");
        expect(expense).toHaveProperty("note");
        done();
    });
});


