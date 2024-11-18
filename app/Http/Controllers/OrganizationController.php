<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Organization;
use Illuminate\Http\JsonResponse;

class OrganizationController extends Controller
{
    public function index()
    {
        $organizations = Organization::all();
        return response()->json($organizations);
    }
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'date_signed_up' => 'required|date',
            'company_name' => 'required|string|max:255',
            'contact_email' => 'required|email|max:255',
            'contact_phone' => 'required|string|max:20',
            'monthly_plan' => 'required|in:Pending,Active,Expired',
        ]);

        // Create a new organization using the validated data
        $organization = Organization::create($validatedData);

        // Return a success message with a 201 status code
        return response()->json([
            'message' => 'Organization added successfully',
            'organization' => $organization
        ], 201);
    }
    // In OrganizationController.php
    public function count()
    {
        // Example logic to return the count of organizations
        $organizationCount = Organization::count(); // Assuming you have an Organization model
        return response()->json(['count' => $organizationCount]);
    }
    public function update(Request $request, $id)
    {
        // Find the organization by ID
        $organization = Organization::find($id);

        // Return a 404 error if the organization does not exist
        if (!$organization) {
            return response()->json(['message' => 'Organization not found'], 404);
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'date_signed_up' => 'sometimes|date',
            'company_name' => 'sometimes|string|max:255',
            'manager_name' => 'sometimes|string|max:255',
            'phone' => 'sometimes|string|max:20',
            'manager_phone' => 'sometimes|string|max:20',
            'website' => 'sometimes|url',
            'address' => 'sometimes|string|max:255',
            'address2' => 'sometimes|string|max:255',
            'state' => 'sometimes|string|max:100',
            'city' => 'sometimes|string|max:100',
            'country' => 'sometimes|string|max:100',
            'zip_code' => 'sometimes|string|max:20',
        ]);

        // Update the organization with the validated data
        $organization->update($validatedData);

        // Return a success response
        return response()->json([
            'message' => 'Organization updated successfully',
            'organization' => $organization
        ]);
    }
}
