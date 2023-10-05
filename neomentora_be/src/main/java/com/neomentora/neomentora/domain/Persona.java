package com.neomentora.neomentora.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_persona")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
abstract class Persona implements User {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;
    private String name;
    private String email;
    private Integer ddd;
    private Integer phone;

    public Persona(String name, String email, Integer ddd, Integer phone) {
        this.name = name;
        this.email = email;
        this.ddd = ddd;
        this.phone = phone;
    }
}
