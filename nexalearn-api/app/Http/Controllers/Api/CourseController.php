<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display all courses.
     */
    public function index(Request $request)
    {
        $query = Course::with('category');

        if ($request->filled('category')) {
            $query->where(
                'category_id',
                $request->integer('category')
            );
        }

        $courses = $query->get();

        return response()->json($courses);
    }


    /**
     * Store a new course.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:150',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'image' => 'nullable|string|max:2048',
            'category_id' => 'required|exists:categories,id',
        ]);

        $course = Course::create($validated);

        return response()->json(
            $course->load('category'),
            201
        );
    }


    /**
     * Display one course.
     */
    public function show(Course $course)
    {
        return response()->json(
            $course->load('category')
        );
    }


    /**
     * Update a course.
     */
    public function update(Request $request, Course $course)
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:150',
            'description' => 'sometimes|required|string',
            'price' => 'sometimes|required|numeric|min:0',
            'image' => 'nullable|string|max:2048',
            'category_id' => 'sometimes|required|exists:categories,id',
        ]);

        $course->update($validated);

        return response()->json(
            $course->load('category')
        );
    }


    /**
     * Delete a course.
     */
    public function destroy(Course $course)
    {
        $course->delete();

        return response()->json([
            'message' => 'Curso eliminado correctamente.'
        ]);
    }
}