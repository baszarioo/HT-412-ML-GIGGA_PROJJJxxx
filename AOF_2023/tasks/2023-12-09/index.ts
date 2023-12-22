export interface Tool {
  init(): void;
  update(): void;
  dispose(): void;
}
export class Equipment {
  private tools: Tool[] = [];
  private initialized: boolean = false;
  registerTools(...tools: Tool[]) {
    this.tools.push(...tools);
  }
  initializeTools() {
    if(this.initialized) {
      throw new Error('Tools have already been initialized.');
    }
    for(const tool of this.tools) {
      tool.init();
    }
    this.initialized = true;
  }
  updateTools() {
    if(!this.initialized) {
      throw new Error('Cannot update any tools before initialization.');
    }
    for(const tool of this.tools) {
      tool.update();
    }
  }
  disposeTools() {
    if(!this.initialized) {
      throw new Error('Cannot dispose any tools before initialization.');
    }
    for (const tool of this.tools){
      tool.dispose();
    }
    this.initialized = false;
  }
}