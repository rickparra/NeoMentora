package com.neomentora.neomentora.controller;

import com.neomentora.neomentora.domain.Investor;
import com.neomentora.neomentora.domain.Mentor;
import com.neomentora.neomentora.domain.SmallBusiness;
import com.neomentora.neomentora.dto.InvestorDTO;
import com.neomentora.neomentora.dto.MentorDTO;
import com.neomentora.neomentora.dto.SmallBusinessDTO;
import com.neomentora.neomentora.service.InvestorService;
import com.neomentora.neomentora.service.MentorService;
import com.neomentora.neomentora.service.SmallBusinessService;
import com.neomentora.neomentora.util.Pagination;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping(path = "/user")
public record UserController(
        MentorService mentorService,
        InvestorService investorService,
        SmallBusinessService smallBusinessService
) implements Controller {

    private static final String MENTOR_ID_PATH = "/mentor/{id}";
    private static final String INVESTOR_ID_PATH = "/investor/{id}";
    private static final String SMALL_BUSINESS_ID_PATH = "/smallBusiness/{id}";
    private static final String ID = "id";
    private static final String TEN = "10";
    private static final String ZERO = "0";

    @PostMapping(path = "/mentor")
    public ResponseEntity<Mentor> registerMentor(@RequestBody MentorDTO mentorDTO, UriComponentsBuilder uriBuilder) {
        var mentor = mentorService.registerUser(mentorDTO);

        return ResponseEntity
                .created(uriBuilder.path(MENTOR_ID_PATH).buildAndExpand(mentor.getId()).toUri())
                .body(mentor);
    }

    @PostMapping(path = "/investor")
    public ResponseEntity<Investor> registerInvestor(@RequestBody InvestorDTO investorDTO, UriComponentsBuilder uriBuilder) {
        var investor = investorService.registerInvestor(investorDTO);

        return ResponseEntity
                .created(uriBuilder.path(INVESTOR_ID_PATH).buildAndExpand(investor.getId()).toUri())
                .body(investor);
    }


    @PostMapping(path = "/smallBusiness")
    public ResponseEntity<SmallBusiness> registerSmallBusinessDTO(@RequestBody SmallBusinessDTO smallBusinessDTO, UriComponentsBuilder uriBuilder) {
        var smallBusiness = smallBusinessService.registerSmallBusiness(smallBusinessDTO);

        return ResponseEntity
                .created(uriBuilder.path(SMALL_BUSINESS_ID_PATH).buildAndExpand(smallBusiness.getId()).toUri())
                .body(smallBusiness);
    }

    @GetMapping(path = "/mentor", params = {ID})
    public ResponseEntity<Mentor> getMentorById(Long id) {
        return ResponseEntity.ok(mentorService.getMentorById(id));
    }


    @GetMapping(path = "/investor", params = {ID})
    public ResponseEntity<Investor> getInvestorById(Long id) {
        return ResponseEntity.ok(investorService.getInvestorById(id));
    }


    @GetMapping(path = "/smallbusiness", params = {ID})
    public ResponseEntity<SmallBusiness> getSmallBusinessById(Long id) {
        return ResponseEntity.ok(smallBusinessService.getSmallBusinessById(id));
    }

    @GetMapping(path = "/mentor/all")
    public ResponseEntity<Pagination<Mentor>> getAllMentor(
            @RequestParam(defaultValue = TEN) Integer limit,
            @RequestParam(defaultValue = ZERO) Integer offset
    ) {
        return ResponseEntity.ok(mentorService.getAllMentor(limit, offset));
    }


    @GetMapping(path = "/investor/all")
    public ResponseEntity<Pagination<Investor>> getAllInvestor(
            @RequestParam(defaultValue = TEN) Integer limit,
            @RequestParam(defaultValue = ZERO) Integer offset
    ) {
        return ResponseEntity.ok(investorService.getAllInvestor(limit, offset));
    }


    @GetMapping(path = "/smallbusiness/all")
    public ResponseEntity<Pagination<SmallBusiness>> getAllSmallBusiness(
            @RequestParam(defaultValue = TEN) Integer limit,
            @RequestParam(defaultValue = ZERO) Integer offset
    ) {
        return ResponseEntity.ok(smallBusinessService.getAllSmallBusiness(limit, offset));
    }

}
