import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Project {
  _id?: string;
  title: string;
  description: string;
  image: string;
}
@Component({
  selector: 'app-upcomingproject',
  standalone: false,
  templateUrl: './upcomingproject.component.html',
  styleUrl: './upcomingproject.component.css'
})
export class UpcomingprojectComponent implements OnInit {

  projectForm: FormGroup;
  projects: Project[] = [];
  isEditMode = false;
  editProjectId: string | null = null;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    // Replace this with your API call
    // Example:
    // this.service.getProjects().subscribe(data => this.projects = data);
    this.projects = [
      { title: 'Project A', description: 'Desc A', image: 'https://via.placeholder.com/100' }
    ];
  }

  onSubmit() {
    if (this.projectForm.invalid) return;

    if (this.isEditMode) {
      const updated = { ...this.projectForm.value, _id: this.editProjectId };
      // this.service.updateProject(updated).subscribe(...)
      this.projects = this.projects.map(p => p._id === updated._id ? updated : p);
      this.resetForm();
    } else {
      // this.service.addProject(this.projectForm.value).subscribe(...)
      this.projects.push({ ...this.projectForm.value });
      this.projectForm.reset();
    }
  }

  onEdit(project: Project) {
    this.projectForm.patchValue(project);
    this.isEditMode = true;
    this.editProjectId = project._id || '';
  }

  onDelete(id: string | undefined) {
    if (!id) return;
    // this.service.deleteProject(id).subscribe(...)
    this.projects = this.projects.filter(p => p._id !== id);
  }

  resetForm() {
    this.projectForm.reset();
    this.isEditMode = false;
    this.editProjectId = null;
  }
}
