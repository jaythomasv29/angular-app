export class LikeComponent {
  
  constructor(private likesCount: number, private isSelected: boolean){

  }
  onClick() {
    this.likesCount += this.isSelected ? -1 : 1
    this.isSelected = !this.isSelected
  }
}