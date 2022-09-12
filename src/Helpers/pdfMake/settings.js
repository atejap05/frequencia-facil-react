export class SETTINGS {
  pageSize = "A4";

  convertInUnitToPtUnit(inUnit) {
    return inUnit * 71.729;
  }

  get fontSize() {
    return {
      font_9: 9,
      font_10: 10,
      font_11: 11,
      font_12: 12,
      font_16: 16,
    };
  }

  get margins() {
    return {
      marginPageLeft: this.convertInUnitToPtUnit(0.4),
      marginPageRight: this.convertInUnitToPtUnit(0.4),
      marginPageTop: this.convertInUnitToPtUnit(3.08),
      marginPageBottom: this.convertInUnitToPtUnit(0),
    };
  }

  get pageMargins() {
    return [
      this.margins.marginPageLeft,
      this.margins.marginPageTop,
      this.margins.marginPageRight,
      this.margins.marginPageBottom,
    ];
  }
}
