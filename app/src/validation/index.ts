/**
 * Created by slashhuang on 16/8/14.
 */

/**
 * component-level
 */

export { BaseValidation } from './core/models/base.validation';
export { IFieldValidation } from './core/models/field-validation.interface';
export { IFieldValidatorResult } from './core/models/field-validator-result.interface';
export { ValidationMessage } from './core/models/validation-message.model';
export { ValidationMessages } from './core/models/validation-messages.model';
export { ValidationMessageComponent } from './core/components/validation-message/validation-message.component';
export { ValidationMessagesComponent } from './core/components/validation-messages/validation-messages.component';


/**
 * logic-level
 */
export { HasValue } from './logics/hasValue.logic';

export { IsNumeric } from './logics/numeric/isNumeric.logic';
export { Min } from './logics/numeric/min.logic';
export { Max } from './logics/numeric/max.logic';
export { Range } from './logics/numeric/range.logic';

export { MinLength } from './logics/length/minLength.logic';
export { MaxLength } from './logics/length/maxLength.logic';
export { Length } from './logics/length/length.logic';
export { IsLength } from './logics/length/isLength.logic';

export { IsPattern } from './logics/patterns/isPattern.logic';
export { IsEmail } from './logics/patterns/isEmail.logic';
