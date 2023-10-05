package com.neomentora.neomentora.domain;

import com.neomentora.neomentora.dto.SmallBusinessDTO;
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
@Entity
@Getter
@Setter
@Table(name = "tb_small_business")
public class SmallBusiness extends Persona {
    @Enumerated(EnumType.STRING)
    private DocumentTypes typeOfDocument;
    private String activitySector;
    private String document;
    private String problemOrChallenge;
    private String photoUrl;

    public SmallBusiness(SmallBusinessDTO smallBusinessDTO) {
        super(smallBusinessDTO.name(), smallBusinessDTO.email(), smallBusinessDTO.ddd(), smallBusinessDTO.phone());
        this.typeOfDocument = smallBusinessDTO.typeOfDocument();
        this.document = smallBusinessDTO.document();
        this.activitySector = smallBusinessDTO.activitySector();
        this.problemOrChallenge = smallBusinessDTO.problemOrChallenge();
        this.photoUrl = smallBusinessDTO.photoUrl();
    }

}
