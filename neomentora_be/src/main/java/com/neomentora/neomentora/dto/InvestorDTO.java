package com.neomentora.neomentora.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import static com.neomentora.neomentora.util.Constant.EMAIL_MESSAGE;
import static com.neomentora.neomentora.util.Constant.FIELD_CANNOT_BE_NULL_EMPTY_BLANK_MESSAGE;

public record InvestorDTO(
        String name,
        @Email(message = EMAIL_MESSAGE)
        @NotBlank(message = FIELD_CANNOT_BE_NULL_EMPTY_BLANK_MESSAGE)
        String email,
        Integer ddd,
        Integer phone,
        String areasOfInterest,
        Integer amountAvailableForInvestment
) {
}
