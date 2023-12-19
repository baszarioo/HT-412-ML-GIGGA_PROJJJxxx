export class OrderController {
  machines: Machine[] = [];
  registerMachine(machine: Machine) {
    this.machines.push(machine);
  }
  unregisterMachine(machine: Machine) {
    const index = this.machines.indexOf(machine);
    if(index !== -1){
      this.machines.splice(index, 1);
    }
  }
  setState(newState: string) {
    if(!['snowboards', 'game consoles', 'streaming gear'].includes(newState)){ 
      throw new Error('Invalid state provided');
  }
  for(const machine of this.machines){
    machine.updateState(newState);
  }
}
}
export class Machine {
  state: string | null = null;
  orderHistory: string[] = [];
  updateState(newState: string) {
    this.state=newState;
    this.orderHistory.push(`Order #${this.orderHistory.length + 1} - ${newState}`);
  }
  performAudit(): string[] {
    return [...this.orderHistory];
  }
}