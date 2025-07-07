import { EducationService } from './education.service';
import { CreateEducationDto, UpdateEducationDto } from '../../libs/dto/education.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class EducationController {
    private readonly educationService;
    constructor(educationService: EducationService);
    create(createEducationDto: CreateEducationDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        institution: string;
        degree: string;
        id: number;
    }>;
    findAll(searchDto: SearchDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        institution: string;
        degree: string;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        institution: string;
        degree: string;
        id: number;
    }>;
    update(id: string, updateEducationDto: UpdateEducationDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        institution: string;
        degree: string;
        id: number;
    }>;
    remove(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        institution: string;
        degree: string;
        id: number;
    }>;
}
