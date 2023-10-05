package com.neomentora.neomentora.service;

import com.neomentora.neomentora.dao.MentorRepository;
import com.neomentora.neomentora.domain.Investor;
import com.neomentora.neomentora.domain.Mentor;
import com.neomentora.neomentora.dto.MentorDTO;
import com.neomentora.neomentora.exception.NotFoundException;
import com.neomentora.neomentora.exception.ResourceAlreadyExistsException;
import com.neomentora.neomentora.util.Pagination;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import static com.neomentora.neomentora.util.Constant.EMAIL_ALREADY_REGISTERED;
import static com.neomentora.neomentora.util.Constant.USER_NOT_FOUND;

@Service
public class MentorService implements UserService {

    private final MentorRepository repository;

    public MentorService(MentorRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Mentor registerUser(MentorDTO mentorDTO) {
        repository
                .findByEmail(mentorDTO.email())
                .ifPresent(it -> {
                    throw new ResourceAlreadyExistsException(EMAIL_ALREADY_REGISTERED);
                });

        return repository.save(new Mentor(mentorDTO));
    }

    public Mentor getMentorById(Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException(USER_NOT_FOUND));
    }

    public Pagination<Mentor> getAllMentor(Integer limit, Integer offset) {
        var pageRequest = PageRequest.of(offset, limit);
        var userPagination = repository.findAll(pageRequest);

        return new Pagination<>(userPagination);
    }
}
