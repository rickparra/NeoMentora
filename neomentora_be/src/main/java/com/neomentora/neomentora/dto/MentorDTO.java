package com.neomentora.neomentora.dto;

import com.neomentora.neomentora.domain.Specialty;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import static com.neomentora.neomentora.util.Constant.EMAIL_MESSAGE;
import static com.neomentora.neomentora.util.Constant.FIELD_CANNOT_BE_NULL_EMPTY_BLANK_MESSAGE;

public record MentorDTO(
        String name,
        @Email(message = EMAIL_MESSAGE)
        @NotBlank(message = FIELD_CANNOT_BE_NULL_EMPTY_BLANK_MESSAGE)
        String email,
        Integer ddd,
        Integer phone,
        Specialty specialty,
        String photoUrl
) {
}
