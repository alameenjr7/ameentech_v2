"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsJsonString = IsJsonString;
const class_validator_1 = require("class-validator");
function IsJsonString(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isJsonString',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value) {
                    if (typeof value !== 'string')
                        return false;
                    try {
                        JSON.parse(value);
                        return true;
                    }
                    catch {
                        return false;
                    }
                },
                defaultMessage(args) {
                    return `${args.property} must be a valid JSON string`;
                },
            },
        });
    };
}
//# sourceMappingURL=custom-validators.js.map