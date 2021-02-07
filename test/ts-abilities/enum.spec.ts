enum MyEnum {
    name =  'nam',
    lastName = 'namekhanevadegi'
}
describe('enum type test', () => {
    it('rnum as string', () => {
        const d = MyEnum.lastName;
        expect(d === 'namekhanevadegi');
    });
});