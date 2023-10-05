package com.neomentora.neomentora.domain;

import com.neomentora.neomentora.dto.MentorDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity()
@Getter
@Setter
@Table(name = "tb_mentor")
public class Mentor extends Persona {
    @Enumerated(EnumType.STRING)
    private Specialty specialty;
    @Column(length = 1000)
    private String photoUrl;


    public Mentor(MentorDTO mentorDTO) {
        super(mentorDTO.name(), mentorDTO.email(), mentorDTO.ddd(), mentorDTO.phone());
        this.specialty = mentorDTO.specialty();
        this.photoUrl = mentorDTO.photoUrl();
    }
}
