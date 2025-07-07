import { WorkExperiencesService } from './work-experiences.service';
import { CreateWorkExperienceDto, UpdateWorkExperienceDto } from '../../libs/dto/work-experience.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class WorkExperiencesController {
    private readonly workExperiencesService;
    constructor(workExperiencesService: WorkExperiencesService);
    create(createWorkExperienceDto: CreateWorkExperienceDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        role: string;
        company: string;
        id: number;
    }>;
    findAll(searchDto: SearchDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        role: string;
        company: string;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        role: string;
        company: string;
        id: number;
    }>;
    update(id: string, updateWorkExperienceDto: UpdateWorkExperienceDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        role: string;
        company: string;
        id: number;
    }>;
    remove(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        role: string;
        company: string;
        id: number;
    }>;
}
