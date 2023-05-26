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
exports.LoginResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const userResponse_dto_1 = require("../../user/dto/userResponse.dto");
let LoginResponseDto = class LoginResponseDto {
};
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoginResponseDto.prototype, "accessToken", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoginResponseDto.prototype, "refreshToken", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", userResponse_dto_1.UserResponseDto)
], LoginResponseDto.prototype, "user", void 0);
LoginResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], LoginResponseDto);
exports.LoginResponseDto = LoginResponseDto;
//# sourceMappingURL=loginResponse.dto.js.map