from django.contrib import admin

from .models import TODO


class TODO_Admin(admin.ModelAdmin):
    list_display = ['task','date','done']


admin.site.register(TODO,TODO_Admin)


