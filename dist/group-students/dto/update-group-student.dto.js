"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGroupStudentsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_group_student_dto_1 = require("./create-group-student.dto");
class UpdateGroupStudentsDto extends (0, swagger_1.PartialType)(create_group_student_dto_1.CreateGroupStudentsDto) {
}
exports.UpdateGroupStudentsDto = UpdateGroupStudentsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "AbuTeach",
        description: "Name of the group",
    }),
    __metadata("design:type", String)
], UpdateGroupStudentsDto.prototype, "group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "+998999765302",
        description: "Phone number of the student",
    }),
    __metadata("design:type", String)
], UpdateGroupStudentsDto.prototype, "student_phone", void 0);
//# sourceMappingURL=update-group-student.dto.js.map