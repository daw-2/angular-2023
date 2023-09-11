export class User {
  constructor(
    public name: string,
    public firstname: string,
    public birthday: string,
    public avatar: string
  ) {
  }

  age(): number {
    const today = new Date();
    const birthday = new Date(this.birthday);
    let age = today.getFullYear() - birthday.getFullYear();

    if (today.getMonth() < birthday.getMonth()) {
      return age - 1;
    }

    return age;
  }
}
