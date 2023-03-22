from django.urls import reverse_lazy
from django.views.generic import (CreateView, DeleteView, DetailView, ListView,
                                  UpdateView)

from .forms import HanJiForm
from .models import HanJi


class HanJiListView(ListView):
    model = HanJi
    template_name = 'han_ji_dict/index.html'
    paginate_by = 8


class HanJiDetailView(DetailView):
    model = HanJi
    template_name = 'han_ji_dict/detail.html'


class HanJiCreateView(CreateView):
    model = HanJi
    form_class = HanJiForm
    template_name = 'han_ji_dict/create.html'
    success_url = reverse_lazy('han_ji_dict:home')


class HanJiUpdateView(UpdateView):
    model = HanJi
    form_class = HanJiForm
    template_name = 'han_ji_dict/update.html'


class HanJiDeleteView(DeleteView):
    model = HanJi
    template_name = 'han_ji_dict/delete.html'
    success_url = reverse_lazy('han_ji_dict:home')
