class Student {
  private _firstName: string;
  private _lastName: string;
  private _dateOfBirth: string;
  private _field: string;

  constructor(
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    field: string
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._dateOfBirth = dateOfBirth;
    this._field = field;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get dateOfBirth(): string {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: string) {
    this._dateOfBirth = value;
  }

  get field(): string {
    return this._field;
  }

  set field(value: string) {
    this._field = value;
  }

  getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}

export default Student;
