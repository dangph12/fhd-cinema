package com.company.project.module.customers.repository;

<<<<<<< HEAD
import com.company.project.module.customers.entity.Customer;
=======
import java.util.List;

import com.company.project.module.customers.entity.Customer;
import com.company.project.module.vouchers.entity.Voucher;
>>>>>>> 40436fe (fix: Using email instead of customerId to send email reset password (#55))

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {
  boolean existsByCustomerName(String customerName);
  boolean existsByCustomerPhone(String customerPhone);
  boolean existsByCustomerEmail(String customerEmail);
<<<<<<< HEAD
=======
  List<Customer> findByVouchersContaining(Voucher voucher);
>>>>>>> 40436fe (fix: Using email instead of customerId to send email reset password (#55))
  Customer findByCustomerEmail(String customerEmail);
}

