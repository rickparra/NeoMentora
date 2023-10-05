package com.neomentora.neomentora.domain;

import com.neomentora.neomentora.dto.InvestorDTO;
import jakarta.persistence.Entity;
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
@Table(name = "tb_investor")
public class Investor extends Persona {
    private String areasOfInterest;
    private Integer amountAvailableForInvestment;

    public Investor(InvestorDTO investorDTO) {
        super(investorDTO.name(), investorDTO.email(), investorDTO.ddd(), investorDTO.phone());
        this.areasOfInterest = investorDTO.areasOfInterest();
        this.amountAvailableForInvestment = investorDTO.amountAvailableForInvestment();
    }
}
