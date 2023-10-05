package com.neomentora.neomentora.service;

import com.neomentora.neomentora.dao.InvestorRepository;
import com.neomentora.neomentora.domain.Investor;
import com.neomentora.neomentora.dto.InvestorDTO;
import com.neomentora.neomentora.exception.NotFoundException;
import com.neomentora.neomentora.exception.ResourceAlreadyExistsException;
import com.neomentora.neomentora.util.Pagination;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import static com.neomentora.neomentora.util.Constant.EMAIL_ALREADY_REGISTERED;
import static com.neomentora.neomentora.util.Constant.USER_NOT_FOUND;

@Service
public class InvestorService implements UserService {

    private final InvestorRepository repository;


    public InvestorService(InvestorRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Investor registerInvestor(InvestorDTO investorDTO) {
        repository
                .findByEmail(investorDTO.email())
                .ifPresent(it -> {
                    throw new ResourceAlreadyExistsException(EMAIL_ALREADY_REGISTERED);
                });


        return repository.save(new Investor(investorDTO));
    }

    public Investor getInvestorById(Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException(USER_NOT_FOUND));
    }

    public Pagination<Investor> getAllInvestor(Integer limit, Integer offset) {
        var pageRequest = PageRequest.of(offset, limit);
        var userPagination = repository.findAll(pageRequest);

        return new Pagination<>(userPagination);
    }
}
