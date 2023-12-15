// Tutaj skopiuj kod zadania
export class GiftRegistry {
    private registry: Map<number, string[]>;
    constructor(){
        this.registry = new Map();
    }
    addGift(childId: number, gift: string) {
        if(!this.registry.has(childId))  {
            this.registry.set(childId, []); 
        }  
        this.registry.get(childId)!.push(gift);
    }
    getGiftsForChild(childId: number) {
        return this.registry.get(childId) || [];
    }
    removeGift(childId: number, gift: string) {
        const gifts = this.registry.get(childId);
        if(!gifts || !gifts.includes(gift)) {
            throw new Error('Gift not found');
        }
        const index = gifts.indexOf(gift);
        gifts.splice(index, 1);
    }
}