
fixture('Assert test');

test('Assert 2 arrays (not equal)', async (t) => {
    let array1 = [2, 2, 2, 3];
    let array2 = [2, 2, 2];
    await t.expect(array2).eql(array1);
});

test('Assert 2 arrays (equal)', async (t) => {
    let array1 = { "value": "value 1" };
    let array2 = { "value": "value 1" };
    await t.expect(array2).eql(array1);
});