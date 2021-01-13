describe('object assign test', () => {
    it('object assign in layer two of objects', () => {
        const obj1 = {
            name: 'Hamid',
            childrenNames: [
                'ali',
                'mahsa',
                'karim'
            ]
        };
        let obj2 = {};
        Object.assign(obj2, obj1, {
            childrenNames: [
                'raha'
            ]
        });
        expect(obj2).toEqual({
            name: 'Hamid',
            childrenNames: [
                'raha'
            ]
        });
    });
});