import { add, edit } from "../../data/data";
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



