import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  findAll(): Promise<Address[]> {
    return this.addressRepository.find({ relations: ['student'] });
  }

  findOne(id: number): Promise<Address> {
    return this.addressRepository.findOne({
      where: { id },
      relations: ['student'],
    });
  }

  async create(addressData: Partial<Address>): Promise<Address> {
    const address = this.addressRepository.create(addressData);
    return this.addressRepository.save(address);
  }

  async update(id: number, addressData: Partial<Address>): Promise<Address> {
    await this.addressRepository.update(id, addressData);
    return this.addressRepository.findOne({
      where: { id },
      relations: ['student'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.addressRepository.delete(id);
  }
}
